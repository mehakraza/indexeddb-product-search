import React from 'react';
import { Modal, Image } from 'antd';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { FALLBACK_IMG } from '../../utils/constants';
import './index.css';

/**
 * ProductModal Component: Display additional_image_links of selected product in a modal (carousal supported)
 */
const ProductModal = ({ product, isModalVisible, handleCancel }) => {
  if (!product) return null;

  const itemImages = product.additional_image_link &&
    product.additional_image_link.split(', ').map((img, index) => (
      <LazyLoadComponent>
        <Image
          key={`${img}${index}`}
          className="product-modal__image"
          src={img}
          alt={product.title}
          fallback={FALLBACK_IMG}
        />
      </LazyLoadComponent>
    ));

  return (
    <Modal
      className="product-modal"
      title={product.title}
      width={720}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Image.PreviewGroup>
        {itemImages}
      </Image.PreviewGroup>
    </Modal>
  )
};

export default ProductModal;
