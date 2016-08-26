var React = require('react');
var Hour = require('./Hour.react');
var AppointmentStore = require('../stores/AppointmentStore');


function getStateFromStores() {
  return AppointmentStore.getAppointments();
}

var Day = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    var state = this.state;

    return (
      <div className="day-block">
        <Hour name={"9:00 - 10:00"} c={'nine'} contactName={state['nine'].name} contactNumber={state['nine'].phone } />
        <Hour name={"10:00 - 11:00"} c={'ten'} contactName={state['ten'].name} contactNumber={state['ten'].phone}/>
        <Hour name={"11:00 - 12:00"} c={'eleven'} contactName={state['eleven'].name} contactNumber={state['eleven'].phone}/>
        <Hour name={"12:00 - 1:00"} c={'twelve'} contactName={state['twelve'].name} contactNumber={state['twelve'].phone}/>
        <Hour name={"1:00 - 2:00"} c={'one'} contactName={state['one'].name} contactNumber={state['one'].phone}/>
        <Hour name={"2:00 - 3:00"} c={'two'} contactName={state['two'].name} contactNumber={state['two'].phone}/>
        <Hour name={"3:00 - 4:00"} c={'three'} contactName={state['three'].name} contactNumber={state['three'].phone}/>
        <Hour name={"4:00 - 5:00"} c={'four'} contactName={state['four'].name} contactNumber={state['four'].phone}/>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = Day;
