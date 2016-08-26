
 var Dispatcher = require('../dispatcher/Dispatcher');
 var Constants = require('../constants/Constants');

 var ActionTypes = Constants.ActionTypes;

module.exports = {

  clickThread: function(threadID) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_MEETING
    });
  }

};
