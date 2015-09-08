var React = require('react');
var VideosController = require("./components/videos/videosController")

var videoStore = require("./stores/videoStore")

var App = React.createClass({
  componentDidMount: function() {
    videoStore.addChangeListener(this.videosUpdated);
  },

  componentWillUnmount: function() {
    videoStore.removeChangeListener(this.videosUpdated);
  },

  videosUpdated: function() {
    console.log("something happened", "app");
  },

	render: function() {
		return (
			<VideosController />
		);
	}
	
});
	
module.exports = App;
