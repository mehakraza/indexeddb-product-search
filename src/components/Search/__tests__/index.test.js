import React from 'react';
import { Input, Select, Checkbox } from 'antd';
import { shallow } from 'enzyme';
import Search from '..';

const SET_SEARCH_TERM = jest.fn();
const SET_GENDER = jest.fn();
const SET_ON_SALE = jest.fn();

const PROPS = {
   searchRef: {},
   disabled: false,
   setSearchTerm: SET_SEARCH_TERM,
   setGender: SET_GENDER,
   setOnSale: SET_ON_SALE,
   searchTerm: 'searchTerm',
   gender: 'gender',
   onSale: 'onSale',
};

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search {...PROPS} />);
  });

  describe('rendering', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('callback', () => {
     it('should NOT call setSearchTerm on keypress ENTER', () => {
      wrapper.find(Input).simulate('keypress', { key: 'Enter' });
      expect(SET_SEARCH_TERM.mock.calls).toEqual([]);
    });

    it('should call setSearchTerm on keypress', () => {
      wrapper.find(Input).simulate('keypress', { key: 'j' });
      expect(SET_SEARCH_TERM.mock.calls[0][0]).toEqual('searchTermj');
    });

    it('should call setGender on selection', () => {
      wrapper.find(Select).simulate('change', 'male');
      expect(SET_GENDER.mock.calls[0][0]).toEqual('male');
    });

    it('should call setOnSale on click', () => {
    wrapper.find(Checkbox).simulate('change', {target: { checked: true }});
    expect(SET_ON_SALE.mock.calls[0][0]).toEqual(true);
    });
  });
});
