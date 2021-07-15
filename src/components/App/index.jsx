import React from 'react';
import { Layout, Spin } from 'antd';
import Papa from 'papaparse';
import Search from '../Search';
import ProductGrid from '../ProductGrid';
import { populateDB } from '../../utils/operations';
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
      header: true,
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

  setProducts = products => this.setState({ products });

  render() {
    const { products, populatingData } = this.state;
    let searchedContent;

    if (populatingData) searchedContent = <Spin size='large' tip="Populating data. Please wait..." />;
    else if (!products.length) searchedContent = <h2>No matching product found</h2>;
    else searchedContent = <ProductGrid products={products} />;

    return (
      <div className="app">
        <Layout>
          <Header className="app__header">Crealytics</Header>
          <Content className="app__searchedContent">
            <Search setProducts={this.setProducts} />
            {searchedContent}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
