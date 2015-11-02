var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var ProgressBar = React.createClass({
  render: function() {
    return (
      <ReactBootstrap.ProgressBar
        striped active
        {...this.props} />
    );
  },
});

module.exports = ProgressBar;
