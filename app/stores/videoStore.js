var _ = require("lodash");

var dispatcher = require("../dispatcher");
var baseStore = require("../stores/baseStore");
var constants = require("../constants");

var _videos = [
  "https://www.youtube.com/watch?v=vpUbYqJ0OIA",
  "https://www.youtube.com/watch?v=JvyBX3dfUoc",
  "https://www.youtube.com/watch?v=gVTr9GU7rsU",
  "https://www.youtube.com/watch?v=DnKBQquzGXE"
];

var _currentVideo = 0;

var changeVideo = function() {
  _currentVideo += 1;

  if (_currentVideo >= _videos.length) {
    _currentVideo = 0;
  }
};

var VideoStore = _.extend({}, baseStore, {
  videos: function() {
    return _videos;
  },

  currentVideo: function() {
    return this.videos()[_currentVideo];
  }
});

dispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {
    case constants.VIDEO_CHANGED:
      changeVideo();
      VideoStore.emitChange();
      break;
    default:
      return true;
  }
});

module.exports = VideoStore;