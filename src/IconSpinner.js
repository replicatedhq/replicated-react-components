var classNames = require('classnames');
var React = require('react');

var IconSpinner = React.createClass({
  render: function() {
    var classes = classNames(
      'fa fa-circle-o-notch fa-spin',
      this.props.className
    );
    return (
      <i {...this.props} className={classes} />
    );
  },
});

module.exports = IconSpinner;
