var moment = require('moment');
var React = require('react');

var SetIntervalMixin = require('./SetIntervalMixin');

var Moment = React.createClass({
  propTypes: {
    time: React.PropTypes.any.isRequired,
  },

  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return {
      now: Date.now(),
    };
  },

  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },

  tick: function() {
    this.setState({
      now: Date.now(),
    });
  },

  render: function() {
    return (
      <div {...this.props}>
        {moment(this.props.time).fromNow()}
      </div>
    );
  },
});

module.exports = Moment;
