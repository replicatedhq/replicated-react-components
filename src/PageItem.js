var classNames = require('classnames');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;

var PageItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    eventKey: React.PropTypes.any,
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      hidden: false,
      previous: false,
      next: false,
    };
  },

  handleSelect: function(ev) {
    if (this.props.onSelect || this.props.disabled) {
      ev.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  },

  render: function() {
    var classes = {
      'disabled': this.props.disabled,
      'hiddebn': this.props.hidden
    };

    return (
      <li
        {...this.props}
        className={classNames(this.props.className, classes)}>
        <Button
          label={this.props.title}
          onClick={this.handleSelect}
          disabled={this.props.disabled}>
          {this.props.children}
        </Button>
      </li>
    );
  },
});

module.exports = PageItem;
