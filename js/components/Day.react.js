var React = require('react');
var Hour = require('./Hour.react');
var AppointmentStore = require('../stores/AppointmentStore');
var StaticData = require('../StaticData');

function getStateFromStores() {
  return AppointmentStore.getAppointments();
}

var Day = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  render: function() {

    var state = this.state;
    console.log("day state", this.state)

    return (
      <div className="day-block">
        <Hour name={"9:00 - 10:00"} c={'nine'} contactName={state['nine'].name} contactNumber={state['nine'].phone} onChange={this._onChange} />
        <Hour name={"10:00 - 11:00"} c={'ten'} contactName={state['ten'].name} contactNumber={state['ten'].phone} onChange={this._onChange} />
        <Hour name={"11:00 - 12:00"} c={'eleven'} contactName={state['eleven'].name} contactNumber={state['eleven'].phone} onChange={this._onChange} />
        <Hour name={"12:00 - 1:00"} c={'twelve'} contactName={state['twelve'].name} contactNumber={state['twelve'].phone} onChange={this._onChange} />
        <Hour name={"1:00 - 2:00"} c={'one'} contactName={state['one'].name} contactNumber={state['one'].phone} onChange={this._onChange} />
        <Hour name={"2:00 - 3:00"} c={'two'} contactName={state['two'].name} contactNumber={state['two'].phone} onChange={this._onChange} />
        <Hour name={"3:00 - 4:00"} c={'three'} contactName={state['three'].name} contactNumber={state['three'].phone} onChange={this._onChange} />
        <Hour name={"4:00 - 5:00"} c={'four'} contactName={state['four'].name} contactNumber={state['four'].phone} onChange={this._onChange} />
      </div>
    );
  }



});

module.exports = Day;
