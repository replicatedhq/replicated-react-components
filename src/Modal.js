var classNames = require('classnames');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Modal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    footer: React.PropTypes.element,
    onHide: React.PropTypes.func.isRequired,
    cancelButtonText: React.PropTypes.string,
  },

  render: function() {
    var modalTitle;
    var modalFooter;

    if (this.props.title) {
      modalTitle = (
        <ReactBootstrap.Modal.Title>
          {this.props.title}
        </ReactBootstrap.Modal.Title>
      );
    }

    if (this.props.footer) {
      modalFooter = (
        <ReactBootstrap.Modal.Footer
          className="text-center">
          {this.props.footer}
        </ReactBootstrap.Modal.Footer>
      );
    } else {
      modalFooter = (
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button
            bsStyle="default"
            onClick={this.props.onHide}>
            {this.props.cancelButtonText || 'Close'}
          </ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      );
    }

    return (
      <div>
        <ReactBootstrap.Modal
          show={this.props.isVisible}
          backdrop="static"
          {...this.props}
          onHide={this.props.onHide}
          className={classNames(this.props.className)}>

          <ReactBootstrap.Modal.Header closeButton>
            {modalTitle}
          </ReactBootstrap.Modal.Header>

          <ReactBootstrap.Modal.Body>
            {this.props.children}
          </ReactBootstrap.Modal.Body>

          {modalFooter}
        </ReactBootstrap.Modal>
      </div>
    );
  },
});

module.exports = Modal;
