var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Input = React.createClass({
  propTypes: {
    // TODO: inline
    tooltip: React.PropTypes.node,
    id: function(props, propName, componentName) {
      if (props && props.tooltip && !props.id) {
        return new Error(
          'Prop `id` is required when tooltip is specified in `' +
          componentName + '`'
        );
      }
    },
  },

  render: function() {
    var label;
    if (this.props.label && this.props.tooltip) {
      var tooltip = (
        <ReactBootstrap.Tooltip id={this.props.id}>
          {this.props.tooltip}
        </ReactBootstrap.Tooltip>
      );
      label = (
        <ReactBootstrap.OverlayTrigger overlay={tooltip}>
          <span>
            {this.props.label} <i className="fa fa-info-circle" />
          </span>
        </ReactBootstrap.OverlayTrigger>
      );
    } else {
      label = this.props.label;
    }
    return (
      <ReactBootstrap.Input
        {...this.props}
        label={label} />
    );
  },
});

module.exports = Input;
