import React from 'react';
import { shallow } from 'enzyme';
import ProductGrid from '..';

const PROPS = {
  products: [
    {
      gtin: 2001007926858,
      title: 'Product Title 1',
      gender: 'female',
      price: '30.25',
      sale_price: '30.25',
      image_link: 'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.41.jpg',
      additional_image_link: 'https://mosaic01.ztat.net/12.4.jpg, https://mosaic01.ztat.net/12.41.jpg, https://mosaic01.ztat.net/12.4.jpg',
    },
    {
      gtin: 2001007926859,
      title: 'Product Title 2',
      gender: 'female',
      price: '17',
      sale_price: '15',
      image_link: 'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.42.jpg',
      additional_image_link: 'https://mosaic01.ztat.net/12.4.jpg, https://mosaic01.ztat.net/12.42.jpg, https://mosaic01.ztat.net/12.4.jpg',
    },
    {
      gtin: 2001007926860,
      title: 'Product Title 3',
      gender: 'male',
      price: '33.25',
      sale_price: '29.25',
      image_link: 'https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.43.jpg',
      additional_image_link: 'https://mosaic01.ztat.net/12.4.jpg, https://mosaic01.ztat.net/12.43.jpg, https://mosaic01.ztat.net/12.4.jpg',
    },
  ],
  populatingData: false,
  searching: false,
  showLoadMore: true,
  incrementPageNum: jest.fn(),
};

const getWrapper = (overrideProps = {}) => shallow(<ProductGrid {...PROPS} {...overrideProps} />);

describe('ProductGrid', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = getWrapper();
  });

  describe('rendering', () => {
    it('should render correctly when products are available', () => {
      expect(wrapper).toMatchSnapshot();
    });

     it('should render correctly when products are empty', () => {
      wrapper = getWrapper({ products: [] });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when products are being loaded', () => {
      wrapper = getWrapper({ populatingData: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when products are being searched', () => {
      wrapper = getWrapper({ searching: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when showLoadMore is false', () => {
      wrapper = getWrapper({ showLoadMore: false });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
