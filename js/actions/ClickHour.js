
var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  createMessage: function(text, currentThreadID) {
    Dispatcher.dispatch({
      type: ActionTypes.CLICK_HOUR
    });
    //Create Message/Data
  }

};
