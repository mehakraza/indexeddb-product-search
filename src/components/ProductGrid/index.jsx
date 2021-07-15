import React, { Component } from 'react'
import { Card, List, Image } from 'antd';
import { ProductModal } from '../ProductModal';
import './index.css';

const { Meta } = Card;

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

  render() {
    const { products } = this.props;
    const { isModalVisible, selectedItem } = this.state;

    return (
      <>
      <List
        grid={{ gutter: 16, column: 4 }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 100,
        }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card
              style={{ width: 300 }}
              cover={
                <Image
                  alt={item.title}
                  src={item.image_link}
                  preview={false}
                />
              }
              onClick={() => this.toggleModalVisible(item)}
            >
              <Meta
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

