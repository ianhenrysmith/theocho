var React = require('react');

var videoActions = require("../../actions/videoActions");

var VideosController = React.createClass({
  makeItHappen: function() {
    videoActions.showVideo("some value");
  },

  render: function() {
    return (
      <p onClick={this.makeItHappen}>videos go here</p>
    );
  }
  
});
  
module.exports = VideosController;
