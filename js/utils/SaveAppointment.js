var StaticData = require('../StaticData');

module.exports = {
  saveObj: function(appointment) {
    var time = appointment.time;
    console.log(time);
    StaticData[time] = appointment;
    console.log("Saved Object in Data", StaticData);
    return StaticData;
  }
};
