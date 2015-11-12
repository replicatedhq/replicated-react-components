var classNames = require('classnames');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Table = React.createClass({
  render: function() {
    return (
      <ReactBootstrap.Table
        {...this.props}
        className={classNames(this.props.className)}>
        {this.props.children}
      </ReactBootstrap.Table>
    );
  },
});

module.exports = Table;
