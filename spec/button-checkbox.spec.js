var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var ButtonCheckbox = require('../src/ButtonCheckbox.js');

describe('ButtonCheckbox', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <ButtonCheckbox>Button text</ButtonCheckbox>
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('BUTTON');
  });

  it('should render children', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('Button text');
  });
});
