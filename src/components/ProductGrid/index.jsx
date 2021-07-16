import React, { Component } from 'react'
import { Button, Card, List, Image } from 'antd';
import { ProductModal } from '../ProductModal';
import './index.css';

class ProductGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      selectedItem: null,
    }
  }

  toggleModalVisible = item => {
    const { isModalVisible } = this.state;

    this.setState({
      isModalVisible: !isModalVisible,
      selectedItem: !isModalVisible ? item : null,
    });
  }

  onLoadMore = () => {
    const { incrementPageNum } = this.props;
    incrementPageNum();
  }

  render() {
    const { products, populatingData, searching, showLoadMore } = this.props;
    const { isModalVisible, selectedItem } = this.state;

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
          renderItem={item => (
            <List.Item>
              <Card
                className="product-grid__product-card"
                hoverable
                cover={
                  <Image
                    alt={item.title}
                    src={item.image_link}
                    preview={false}
                  />
                }
                onClick={() => this.toggleModalVisible(item)}
              >
                <Card.Meta
                  title={item.title}
                />
                <div>GTIN: {item.gtin}</div>
                <div>Gender: {item.gender}</div>
                <div>Price: {item.price}</div>
                <div>Sale Price: {item.sale_price}</div>
              </Card>
            </List.Item>
          )}
        />
        <ProductModal
          item={selectedItem}
          isModalVisible={isModalVisible}
          handleCancel={this.toggleModalVisible}
        />
      </>
    )
  }
}

export default ProductGrid;

