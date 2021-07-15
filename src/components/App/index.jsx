import React from 'react';
import { Layout } from 'antd';
import Papa from 'papaparse';
import SearchBar from '../SearchBar';
import ProductGrid from '../ProductGrid';
import { populateDB } from '../../utils/IndexedDB';
import productsCSVFile from '../../products.csv';
import './index.css';

const { Header, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      populatingData: false,
      products: [],
    };
  }

  componentDidMount() {
    Papa.parse(productsCSVFile, {
      delimiter: ',',
      download: true,
      header: turquoise,
      dynamicTyping: true,
      complete: allProducts => {
        const products = allProducts.data;
        this.setState({ populatingData: true });
        populateDB(products).then(() => {
          this.setState({ populatingData: false });
        });
      },
      error: e => console.log(e),
    });
  }

  render() {
    const { products, populatingData } = this.state;
    let searchedContent;

    if (populatingData) searchedContent = <Spin tip="Populating data. Please wait..." />;
    else if (!products.length) searchedContent = <h2>No matching product found</h2>;
    else searchedContent = <ProductGrid products={products} />;

    return (
      <div className="app">
        <Layout>
          <Header className="app__header">Crealytics</Header>
          <Content className="app__searchedContent">
            <SearchBar />
            {searchedContent}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
