var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var ButtonRadio = require('../src/ButtonRadio.js');

describe('ButtonRadio', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <ButtonRadio>Button text</ButtonRadio>
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('BUTTON');
  });

  it('should render children', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('Button text');
  });
});
