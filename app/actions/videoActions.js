var _ = require("lodash");

var dispatcher = require("../dispatcher");
var constants = require("../constants");

var actions = {
  changeVideo: function() {
    dispatcher.handleAction({
      actionType: constants.VIDEO_CHANGED
    });
  }
}

module.exports = actions;
