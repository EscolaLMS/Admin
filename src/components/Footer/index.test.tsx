// import React from 'react';

import ReactDOM from 'react-dom';
import Footer from './index';

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
