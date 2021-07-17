import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
