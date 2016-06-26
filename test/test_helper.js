// Set up testing environment to run like a browser in the command line
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers/index.js';
import chaiJquery from 'chai-jquery';

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

  // create HTML code from componentInstance
  var componentHTML = ReactDOM.findDOMNode(componentInstance);

  // return component instance as a jQuery object
  return $(componentHTML);
}


// Build helper for simulating events

// add a new method to jQuery
$.fn.simulate = function(eventName, value) {
  // 'this' is a reference to the jQuery selector item
  if (value) {
    // use jQuery .val() method to change value of selector
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
