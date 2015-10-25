var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var PageItem = require('../src/PageItem.js');

describe('PageItem', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <PageItem>Next</PageItem>
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('LI');
  });

  it('should render children', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('Next');
  });
});
