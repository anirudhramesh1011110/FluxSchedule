
module.exports = {
  createAppointmentObj: function(name, number, time) {
    var obj = {
      time: time,
      name: name,
      number: number
    }

    return obj;
  }
};
