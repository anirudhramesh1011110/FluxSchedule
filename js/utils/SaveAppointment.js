module.exports = {
  saveObj: function(appointment) {
    var rawMessages = JSON.parse(localStorage.getItem('messages'));
    rawMessages.push(appointment);
  }
};
