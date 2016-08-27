
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var StaticData = require('../StaticData');
var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

//var _appoints = JSON.parse(localStorage.getItem('appointments'));

//var _appoints = Object.assign({}, _appoints);

//var _appoints = JSON.parse(JSON.stringify(_appoints));

var _appoints = StaticData;

console.log(_appoints);

var AppointmentStore = assign({}, EventEmitter.prototype, {

  init: function() {

  },

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

  getAppointments: function() {
    return _appoints;
  }

});

AppointmentStore.dispatchToken = Dispatcher.register(function(action) {

  switch (action.type) {
    case ActionTypes.SET_MEETING:
      AppointmentStore.emitChange();
      break;

    default:
      // do nothing
  }
});

module.exports = AppointmentStore;
