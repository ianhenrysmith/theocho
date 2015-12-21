var React = require('react');
var VideosController = require("./components/videos/videosController")

var App = React.createClass({
	render: function() {
		return (
			<VideosController />
		);
	}
});
	
module.exports = App;
