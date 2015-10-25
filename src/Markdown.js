var marked = require('marked');
var React = require('react');

var Markdown = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      <div
        {...this.props}
        dangerouslySetInnerHTML={{__html: marked(this.props.text)}} />
    );
  },
});

module.exports = Markdown;
