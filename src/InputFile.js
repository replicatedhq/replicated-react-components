var keyOf = require('react-prop-types/lib/keyOf');
var styleMaps = require('react-bootstrap/lib/styleMaps');
var objectUtils = require('./utils/object');
var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Input = require('./Input');

var InputFile = React.createClass({
  propTypes: {
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    bsStyle: React.PropTypes.oneOf(styleMaps.STYLES),
    bsSize: keyOf(styleMaps.SIZES),
    buttonFaIconClass: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    defaultFileNameValue: React.PropTypes.string,
    accept: React.PropTypes.string,
    onChange: React.PropTypes.func,
    required: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
  },

  getInitialState: function() {
    return {
      filename: this.props.defaultFileNameValue,
    };
  },

  open: function() {
    var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
    fileInput.value = null;
    fileInput.click();
  },

  clear: function() {
    var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
    fileInput.value = null;
  },

  onClick: function() {
    if (!this.props.disabled) {
      this.open();
    }
  },

  handleUpload: function(ev) {
    // TODO: multiple
    var file = ev.target.files[0];
    this.setState({filename: file.name});

    if (this.props.onChange) {
      this.props.onChange(ev);
    }
  },

  render: function() {
    var outerProps = objectUtils.omit(
      this.props,
      'type', // type is file, duh...
      'name', 'onChange', 'required', 'accept',
      'bsStyle', 'bsSize',
      'buttonFaIconClass', 'buttonText', 'buttonClassName',
      'defaultFileNameValue'
    );
    var styles = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };
    var iconClasses = 'fa';
    if (this.props.buttonFaIconClass) {
      iconClasses = classNames(iconClasses, 'fa-' + this.props.buttonFaIconClass);
    } else {
      iconClasses = classNames(iconClasses, 'fa-folder-open');
    }

    return (
      <Input
        {...outerProps}>
        <input
          type="file"
          id={this.props.id}
          ref="fileInput"
          name={this.props.name}
          accept={this.props.accept}
          disabled={this.props.disabled}
          required={this.props.required}
          className="hidden"
          onChange={this.handleUpload} />
        <div className="text-muted" style={styles}>
          <Button
            bsStyle={this.props.bsStyle}
            bsSize={this.props.bsSize}
            className={this.props.buttonClassName}
            onClick={this.onClick}
            disabled={this.props.disabled}>
            <i className={iconClasses} />
            <span> </span>
            {this.props.buttonText || 'Choose file'}
          </Button>
          <span style={{paddingLeft: '10px'}}>
            {this.state.filename}
          </span>
        </div>
      </Input>
    );
  },
});

module.exports = InputFile;
