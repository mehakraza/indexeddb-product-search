import React from 'react';
import { shallow } from 'enzyme';
import ProductModal from '..';

const PROPS = {
  product: {
    gtin: 2001007926858,
    title: 'Product Title',
    gender: 'female',
    price: '30.25',
    sale_price: '30.25',
    image_link: 'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
    additional_image_link: 'https://mosaic01.ztat.net/12.4.jpg, https://mosaic01.ztat.net/12.4.jpg, https://mosaic01.ztat.net/12.4.jpg',
  },
  isModalVisible: true,
  handleCancel: jest.fn(),
};

const getWrapper = (overrideProps = {}) => shallow(<ProductModal {...PROPS} {...overrideProps} />);

describe('ProductModal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = getWrapper();
  });

  describe('rendering', () => {
    it('should render correctly when modal is open', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when product is not provided', () => {
       wrapper = getWrapper({ product: null });
      expect(wrapper).toMatchSnapshot();
    });

     it('should render correctly when modal is closed', () => {
      wrapper = getWrapper({ isModalVisible: false });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
