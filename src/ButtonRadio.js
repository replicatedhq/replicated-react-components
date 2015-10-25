var classNames = require('classnames');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;

var ButtonRadio = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
  },

  render: function() {
    var btnClassnames = classNames(this.props.className, {
      'active': this.props.active,
    });
    var iconClassnames = classNames('check-icon', 'fa', {
      'fa-dot-circle-o': this.props.active,
      'fa-circle-o': !this.props.active,
    });

    return (
      <Button
        {...this.props}
        className={btnClassnames}
        onClick={this.props.onClick}>
        <i className={iconClassnames} /> {this.props.children}
      </Button>
    );
  },
});

module.exports = ButtonRadio;
