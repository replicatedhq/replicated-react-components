var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;

var Spacer = React.createClass({
  propTypes: {
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
  },

  render: function() {
    var height = this.props.height;
    if (typeof height === 'number') {
      height += 'px';
    }
    return (
      <Row>
        <Col xs={12} style={{height: height}}></Col>
      </Row>
    );
  },
});

module.exports = Spacer;
