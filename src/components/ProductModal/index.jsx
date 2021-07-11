import React, { Component } from 'react';
import { Modal, Image } from 'antd';

export class ProductModal extends Component {
  render() {
    const { item, isModalVisible, handleCancel } = this.props;
    console.log(item.additional_image_link);
    const itemImages = item && item.additional_image_link &&
    item.additional_image_link.map(img => (<Image
        width={200}
        src={img}
      />));
    return (
      <Modal
        title={item.title}
        item={item}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Image.PreviewGroup>
          {itemImages}
        </Image.PreviewGroup>
      </Modal>
    )
  }
}

export default ProductModal;
