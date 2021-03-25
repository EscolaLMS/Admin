// import React from 'react';
import { shallow } from 'enzyme';
import DefaultFooter from '@ant-design/pro-layout/lib/Footer';
import Footer from './index';

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(DefaultFooter).exists()).toBe(true);
  });
});
