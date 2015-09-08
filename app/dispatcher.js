var Dispatcher = require("flux").Dispatcher;
var dispatcher = new Dispatcher();

dispatcher.handleAction = function(action) {
  if (!action.actionType) {
    throw new Error("hello not implemented");
  }

  this.dispatch({
    action: action
  });
};

module.exports = dispatcher;