import React, { Component } from 'react'
import { Button, List } from 'antd';
import ProductModal from '../ProductModal';
import ProductCard from '../ProductCard';
import './index.css';

class ProductGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      selectedProduct: null,
    }
  }

  toggleModalVisible = item => {
    const { isModalVisible } = this.state;

    this.setState({
      isModalVisible: !isModalVisible,
      selectedProduct: !isModalVisible ? item : null,
    });
  }

  onLoadMore = () => {
    const { incrementPageNum } = this.props;
    incrementPageNum();
  }

  render() {
    const { products, populatingData, searching, showLoadMore } = this.props;
    const { isModalVisible, selectedProduct } = this.state;

    const loadMore =
      showLoadMore ? (
          <Button className="product-grid__btn-load-more" onClick={this.onLoadMore}>Load more</Button>
      ) : null;

    return (
      <>
        <List
          loading={{
            spinning: populatingData || searching,
            size: 'large',
            tip: populatingData ? 'Loading data. Please wait...' : 'Searching...'
          }}
          grid={{ gutter: 16, column: 4 }}
          locale= {{
            emptyText: 'No matching product found',
          }}
          loadMore={loadMore}
          dataSource={products}
          renderItem={(item, index) => (
            <ProductCard
              product={item}
              index={index}
              toggleModalVisible={this.toggleModalVisible}
            />
          )}
        />
        <ProductModal
          product={selectedProduct}
          isModalVisible={isModalVisible}
          handleCancel={this.toggleModalVisible}
        />
      </>
    )
  }
}

export default ProductGrid;

