var React = require('react');

var videoActions = require("../../actions/videoActions");

var VideoButtons = React.createClass({
  changeVideo: function() {
    videoActions.changeVideo();
  },

  render: function() {
    return (
      <p onClick={this.changeVideo}>Next</p>
    );
  }
  
});
  
module.exports = VideoButtons;
