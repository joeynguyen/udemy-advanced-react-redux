// Set up testing environment to run like a browser in the command line
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers/index.js';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);


// Build 'renderComponent' helper that should render a given React class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  console.log('componentInstance', componentInstance);

  // create HTML code from componentInstance
  var componentHTML = ReactDOM.findDOMNode(componentInstance);
  console.log('componentHTML', componentHTML);

  // return component instance as a jQuery object
  console.log('$(componentInstance)', $(componentInstance));
  return $(componentHTML);
}


// Build helper for simulating events


// Set up chai-jquery
export { renderComponent, expect };
