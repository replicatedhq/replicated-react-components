var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var Markdown = require('../src/Markdown.js');

describe('Markdown', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <Markdown text="# Markdown" />
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('DIV');
  });

  it('should render markdown from text', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('Markdown');
  });
});
