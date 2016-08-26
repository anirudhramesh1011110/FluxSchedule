var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');
var CreateAppointment = require('../utils/CreateAppointment');
var SaveAppointment = require('../utils/Appointment');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  setMeeting: function(name, number, time) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_MEETING,
      name: name,
      number: number,
      time: time
    });
    var appointment = CreateAppointment.createAppointmentObj(name, number, time);
  }

};
