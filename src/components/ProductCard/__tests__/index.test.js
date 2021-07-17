import React from 'react';
import { Card } from 'antd';
import { shallow } from 'enzyme';
import ProductCard from '..';

const TOGGLE_MODAL_VISIBLE = jest.fn();

const PROPS = {
  product: {
    gtin: 2001007926858,
    title: 'Product Title',
    gender: 'female',
    price: '30.25',
    sale_price: '30.25',
    image_link: 'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg',
  },
  index: 88,
  toggleModalVisible: TOGGLE_MODAL_VISIBLE,
};

describe('ProductCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductCard {...PROPS} />);
  });

  describe('rendering', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('callback', () => {
    it('should call toggleModalVisible on click', () => {
      wrapper.find(Card).simulate('click');
      expect(TOGGLE_MODAL_VISIBLE.mock.calls.length).toEqual(1);
    });
  });
});
