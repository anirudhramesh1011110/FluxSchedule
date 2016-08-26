
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var AppointmentStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCount: function() {
    var threads = ThreadStore.getAll();
    var unreadCount = 0;
    for (var id in threads) {
      if (!threads[id].lastMessage.isRead) {
        unreadCount++;
      }
    }
    return unreadCount;
  }

});

Appointment.dispatchToken = Dispatcher.register(function(action) {

  switch (action.type) {

    case ActionTypes.SET_MEETING:
      AppointmentStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = AppointmentStore;
