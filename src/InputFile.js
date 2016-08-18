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
    bsStyle: React.PropTypes.oneOf(['success', 'warning', 'danger', 'info', 'default', 'primary', 'link']),
    bsSize: React.PropTypes.oneOf(['lg', 'large', 'sm', 'small', 'xs', 'xsmall']),
    buttonFaIconClass: React.PropTypes.string,
    buttonText: React.PropTypes.string,
    buttonClassName: React.PropTypes.string,
    defaultFileNameValue: React.PropTypes.string,
    accept: React.PropTypes.string,
    onChange: React.PropTypes.func,
    required: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    multiple: React.PropTypes.bool,
  },

  getInitialState: function() {
    return {
      filenames: this.props.defaultFileNameValue,
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
    var filenames = [];
    for (var index in ev.target.files) {
      if (ev.target.files.hasOwnProperty(index)) {
        filenames.push(ev.target.files[index].name);
      }
    }
    this.setState({
      filenames: filenames.join(', '),
    });
    if (this.props.onChange) {
      this.props.onChange(ev);
    }
  },

  render: function() {
    var outerProps = objectUtils.omit(
      this.props,
      'type', // type is file, duh...
      'name', 'onChange', 'accept', 'required', 'multiple',
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

    var buttonText;
    if (this.props.buttonText) {
      buttonText = this.props.buttonText;
    } else {
      buttonText = 'Choose file' + (this.props.multiple ? 's' : '');
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
          multiple={this.props.multiple}
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
            {buttonText}
          </Button>
          <span style={{paddingLeft: '10px'}}>
            {this.state.filenames}
          </span>
        </div>
      </Input>
    );
  },
});

module.exports = InputFile;
