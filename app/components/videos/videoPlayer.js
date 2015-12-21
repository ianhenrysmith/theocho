var React = require('react');
var YouTube = require('react-youtube')

var videoStore = require("../../stores/videoStore");

var VideosPlayer = React.createClass({
  getInitialState: function() {
    return {
      currentVideo: videoStore.currentVideo()
    };
  },

  componentDidMount: function() {
    videoStore.addChangeListener(this.currentVideoChanged);
  },

  componentWillUnmount: function() {
    videoStore.removeChangeListener(this.currentVideoChanged);
  },

  currentVideoChanged: function() {
    this.setState({
      currentVideo: videoStore.currentVideo()
    });
  },

  _onPlay: function(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  },

  render: function() {
    // http://localhost:8889/
    var video = this.state.currentVideo;

    // return (
    //   <p>{video}</p>
    // );

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        url={video}
        opts={opts}
        onPlay={this._onPlay}
      />
    );
  }
});
  
module.exports = VideosPlayer;
