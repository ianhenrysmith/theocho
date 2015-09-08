var _ = require("lodash");

var dispatcher = require("../dispatcher");
var constants = require("../constants");

var actions = {
  showVideo: function(value) {
    dispatcher.handleAction({
      actionType: constants.SOMETHING_HAPPENED,
      data: value
    });
  }
}

module.exports = actions;
