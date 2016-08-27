
module.exports = {
  createAppointmentObj: function(name, number, time) {
    var obj = {
      name: name,
      time: time,
      phone: number
    }
    console.log("created obj", obj);
    return obj;
  }
};
