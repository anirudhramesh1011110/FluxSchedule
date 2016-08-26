/**
 *  File contains sample data that will exist in state on the start of
 *  the application.
 */

module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('appointments', JSON.stringify([
      {
        id: 'nine',
        name: 'Ani',
        phone: 1111111111
      },
      {
        id: 'twelve',
        name: 'John',
        phone: 2222222222
      }
    ]));
  }
};
