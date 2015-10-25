var classNames = require('classnames');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;

var ModalAlert = React.createClass({
  propTypes: {
    // TODO: info, warning
    severity: React.PropTypes.oneOf(['success', 'danger']),
    title: React.PropTypes.node,
    body: React.PropTypes.node,
    isVisible: React.PropTypes.bool,
    onHide: React.PropTypes.func.isRequired,
    options: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      severity: 'success',
      options: {},
    };
  },

  onHide: function() {
    this.props.onHide(false);
  },

  onConfirm: function() {
    this.props.onHide(true);
  },

  render: function() {
    var icon;
    switch (this.props.severity) {
    case 'danger':
      icon = (
        <div className="sa-icon sa-error animate animateErrorIcon">
          <span className="sa-x-mark animateXMark">
            <span className="sa-line sa-left"></span>
            <span className="sa-line sa-right"></span>
          </span>
        </div>
      );
      break;

    case 'success':
    default:
      icon = (
        <div>
          <div className="sa-icon sa-success animate">
            <span className="sa-line sa-tip animateSuccessTip"></span>
            <span className="sa-line sa-long animateSuccessLong"></span>
            <div className="sa-placeholder"></div>
            <div className="sa-fix"></div>
          </div>
        </div>
      );
      break;
    }

    var body = this.props.body;
    if (typeof body !== 'object') {
      body = <p>{body}</p>;
    }

    var showCancelButton = this.props.options.showCancelButton ? true : false;
    var confirmButtonText = this.props.options.confirmButtonText || 'Ok';
    var cancelButtonText = this.props.options.cancelButtonText || 'Cancel';

    return (
      <div className="repl-alert">
        <Modal
          onHide={this.onHide}
          show={this.props.isVisible}
          backdrop={showCancelButton ? 'static' : true}
          container={this}>

          <Modal.Header>
            <Modal.Title>{icon}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h3>{this.props.title}</h3>
            {body}
          </Modal.Body>

          <Modal.Footer
            className="text-center">
            <Button
              onClick={this.onHide}
              className={classNames({'hidden': !showCancelButton})}>
              {cancelButtonText}
            </Button>
            <Button
              bsStyle="primary"
              onClick={this.onConfirm}>
              {confirmButtonText}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  },
});

module.exports = ModalAlert;
