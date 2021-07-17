import React from 'react'
import { List, Card, Image } from 'antd';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { FALLBACK_IMG } from '../../utils/constants';

const ProductCard = ({ product, index, toggleModalVisible }) => (
  <List.Item>
    <Card
      className="product-grid__product-card"
      hoverable
      cover={
        <LazyLoadComponent>
          <Image
            key={`${product.title}${index}`}
            alt={product.title}
            src={product.image_link}
            fallback={FALLBACK_IMG}
            preview={false}
          />
        </LazyLoadComponent>
      }
      onClick={() => toggleModalVisible(product)}
    >
      <Card.Meta
        title={product.title}
      />
      <div>GTIN: {product.gtin}</div>
      <div>Gender: {product.gender}</div>
      <div>Price: {product.price}</div>
      <div>Sale Price: {product.sale_price}</div>
    </Card>
  </List.Item>
);

export default ProductCard;
