var _ = require("lodash");

var dispatcher = require("../dispatcher");
var baseStore = require("../stores/baseStore");
var constants = require("../constants");

var _videos = [];

var VideoStore = _.extend({}, baseStore, {
  getVideos: function() {
    return _content;
  }
});

dispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {
    case constants.SOMETHING_HAPPENED:
      VideoStore.emitChange();
      break;
    default:
      return true;
  }
});

module.exports = VideoStore;