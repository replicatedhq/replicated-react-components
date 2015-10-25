var objectUtils = require('./utils/object');
var moment = require('moment');
var React = require('react');

var DEFAULT_FORMAT = 'lll';

var TimeFmt = React.createClass({
  propTypes: {
    time: React.PropTypes.any,
    format: React.PropTypes.string,
  },

  render: function() {
    var outerProps = objectUtils.omit(this.props, 'time', 'format');
    var formatted = moment(this.props.time)
      .format(this.props.format || DEFAULT_FORMAT);
    return (
      <span {...outerProps}>{formatted}</span>
    );
  },
});

module.exports = TimeFmt;
