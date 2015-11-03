var SetTimeoutMixin = {
  componentWillMount: function() {
    this.timeouts = [];
  },

  setTimeout: function() {
    this.timeouts.push(setTimeout.apply(null, arguments));
  },

  clearTimeouts: function() {
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];
  },

  componentWillUnmount: function() {
    this.clearTimeouts();
  },
};

module.exports = SetTimeoutMixin;
