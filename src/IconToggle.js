var classNames = require('classnames');
var React = require('react');

var IconToggle = React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool,
  },

  render: function() {
    var classes = classNames('fa', {
      'fa-chevron-down': this.props.expanded,
      'fa-chevron-right': !this.props.expanded,
      'expanded': this.props.expanded,
    }, this.props.className);
    return (
      <i {...this.props} className={classes} />
    );
  },
});

module.exports = IconToggle;
