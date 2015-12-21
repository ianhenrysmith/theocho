var React = require('react');

var VideoPlayer = require("./videoPlayer");
var VideoButtons = require("./videoButtons");

var VideosController = React.createClass({
  render: function() {
    return (
      <div>
        <VideoPlayer/>
        <VideoButtons/>
      </div>
    );
  }
});
  
module.exports = VideosController;
