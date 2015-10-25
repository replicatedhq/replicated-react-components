var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var TimeFmt = require('../src/TimeFmt.js');

describe('TimeFmt', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <TimeFmt time="2015-10-24T16:30:48Z" format="MMM Do YYYY" />
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('SPAN');
  });

  it('should render the time in format', function() {
    expect(ReactDOM.findDOMNode(component).textContent.trim()).toEqual('Oct 24th 2015');
  });
});
