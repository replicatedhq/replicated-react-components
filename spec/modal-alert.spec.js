var React = require('react'); // eslint-disable-line no-unused-vars
var ReactTestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');

var ModalAlert = require('../src/ModalAlert.js');

describe('ModalAlert', function() {
  var component;

  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(
      <ModalAlert onHide={function() {}} />
    );
  });

  it('should render', function() {
    expect(ReactDOM.findDOMNode(component).nodeName).toEqual('DIV');
  });
});
