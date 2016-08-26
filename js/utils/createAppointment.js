
module.exports = {
  createAppointmentObj: function(name, number, time) {
    var obj = {};
    obj[time]['name'] = name;
    obj[time]['number'] = number;
    return obj;
  }
};
