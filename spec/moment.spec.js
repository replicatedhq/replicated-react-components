var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var Moment = require('../src/Moment.js');

describe('Moment', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <Moment time={Date.now() - 1000} />
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('DIV');
  });

  it('should render seconds from now', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('a few seconds ago');
  });
});
