module.exports = {
  saveObj: function(appointment) {
    
    //rawMessages.push(appointment);
    //localStorage.setItem('appointments', JSON.stringify(rawMessages));
    localStorage.setItem('appointments', JSON.stringify(appointment));
  }
};
