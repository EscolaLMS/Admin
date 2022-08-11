// import React from 'react';

import ReactDOM from 'react-dom';
import Footer from './index';
import { shallow } from 'enzyme';
import DefaultFooter from '@ant-design/pro-layout/lib/Footer';

import { expect } from '@jest/globals';

// import "babel-polyfill";

// import { store, history } from "./redux/store";
// import { Provider } from "react-redux";
// import { ConnectedRouter } from "connected-react-router";
// import { BrowserRouter } from "react-router-dom";
describe('footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(DefaultFooter).exists()).toBe(true);
  });
});
