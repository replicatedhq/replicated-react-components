var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var ProgressBar = require('../src/ProgressBar.js');

describe('ProgressBar', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <ProgressBar />
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('DIV');
  });
});
