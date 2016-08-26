/**
 *  File contains sample data that will exist in state on the start of
 *  the application.
 */

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('appointments', JSON.stringify([
      {
       name: "Ani",
       number: "23423432"
      },

    ]));
  }
};
