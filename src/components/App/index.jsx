import React, { createRef } from 'react';
import { Layout } from 'antd';
import Papa from 'papaparse';
import Search from '../Search';
import ProductGrid from '../ProductGrid';
import { shouldPopulate, populateDB, markPopulated, searchDB, PAGE_SIZE } from '../../utils/operations';
import { getAllWords } from '../../utils/string';
import productsCSVFile from '../../products.csv';
import './index.css';

const { Content } = Layout;
let buffer = [];

const PARSE_CONFIG = {
  delimiter: ',',
  download: true,
  header: true,
  dynamicTyping: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      populatingData: false,
      searching: false,
      products: [],
      pageNum: 1,
      pagesAvailableToLoad: false,
      searchTerm: '',
      gender: undefined,
      onSale: false,
    };
    this.searchRef = createRef();
  }

  async componentDidMount() {
    this.setState({ populatingData: true });
    const shouldPopulateDB = await shouldPopulate();
    if (!shouldPopulateDB) {
      this.setState({ populatingData: false });
      this.performSearch();
      return;
    }

    let firstLoad = true;
    Papa.parse(productsCSVFile, {
      ...PARSE_CONFIG,
      step: async ({ data: product }) => {
        let gender = product.gender;
        if (product.gender && product.gender.toLowerCase) {
          gender = product.gender.toLowerCase();
        }

        const [price, priceCurrency] = product.price ? product.price.split(' ') : [0, 'EUR'];
        const [salePrice, salePriceCurrency] = product.sale_price ? product.sale_price.split(' ') : [0, 'EUR'];
        const onSale = +price > +salePrice;

        buffer.push({
          ...product,
          titleWords: getAllWords(product.title),
          gender,
          price,
          priceCurrency,
          salePrice,
          salePriceCurrency,
          onSale,
        });

        if (buffer.length === PAGE_SIZE) {
          const chunk = buffer.slice();
          buffer = [];
          await populateDB(chunk);
          if (firstLoad) {
            firstLoad = false;
            this.setState({ populatingData: false });
            this.performSearch();
          }
        }
      },
      complete: async () => {
        if (buffer.length) {
          // Add remaining products in buffer (< PAGE_SIZE)
          await populateDB(buffer);
          buffer = [];
        }
        markPopulated();
      },
      error: e => console.log(e),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const searchables = ['pageNum', 'gender', 'onSale', 'searchTerm'];
    let changedKey;
    const shouldSearch = searchables.some(key => {
      if (prevState[key] !== this.state[key]) {
        changedKey = key;
        return key !== searchables[0] || this.state[key] !== 1;
      }
      return false;
    });
    if (shouldSearch) {
      const isNewSearch = changedKey !== searchables[0];
      this.performSearch(isNewSearch);
    }
  }

  performSearch = async (isNewSearch) => {
    const { searchTerm, gender, onSale, pageNum } = this.state;

    this.setState({ searching: true, pagesAvailableToLoad: false });
    const newProducts = await searchDB(searchTerm, gender, onSale, pageNum);
    const pagesAvailableToLoad = newProducts.length === PAGE_SIZE;
    if (isNewSearch) {
      this.setState({ searching: false, pagesAvailableToLoad, products: newProducts, pageNum: 1 });
      this.searchRef.current.focus();
    } else {
      this.setState(({ products }) => ({ searching: false, pagesAvailableToLoad, products: [...products, ...newProducts]}));
    }
  };

  setSearchTerm = searchTerm => this.setState({ searchTerm });
  setGender = gender => this.setState({ gender });
  setOnSale = onSale => this.setState({ onSale });
  incrementPageNum = () => this.setState(({ pageNum }) => ({ pageNum: pageNum + 1 }));

  render() {
    const { products, populatingData, searching, searchTerm, gender, onSale, pagesAvailableToLoad } = this.state;

    return (
      <div className="app">
        <Layout>
          <Content className="app__content">
            <Search
              searchRef={this.searchRef}
              disabled={populatingData || searching}
              setSearchTerm={this.setSearchTerm}
              setGender={this.setGender}
              setOnSale={this.setOnSale}
              searchTerm={searchTerm}
              gender={gender}
              onSale={onSale}
            />
            <ProductGrid
              populatingData={populatingData}
              searching={searching}
              products={products}
              incrementPageNum={this.incrementPageNum}
              showLoadMore={!populatingData && !searching && pagesAvailableToLoad}
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
