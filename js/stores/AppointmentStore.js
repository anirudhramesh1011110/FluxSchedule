
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var StaticData = require('../StaticData');
var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _appoints = {
  "nine": {
    name: "Ani",
    phone: "1111111",
  },
  "ten": {
    name: "John",
    phone: "111453689001111",
  },
  "eleven": {
    name: "Mary",
    phone: "11165656561111",
  },
  "twelve": {
    name: "Peter",
    phone: "11145345351111",
    backgroundColor: "white",
    modalIsOpen: "false",
  },
  "one": {
    name: "Greg",
    phone: "1115457671111",
    backgroundColor: "white",
    modalIsOpen: "false",
  },
  "two": {
    name: "Will",
    phone: "12341234",
    backgroundColor: "white",
    modalIsOpen: "false",
  },
  "three": {
    name: "Joe",
    phone: "1111111",
    backgroundColor: "white",
    modalIsOpen: "false",
  },
  "four": {
    name: "Steven",
    phone: "1111111",
    backgroundColor: "white",
    modalIsOpen: "false",
  }
};

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
