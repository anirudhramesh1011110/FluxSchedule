var React = require('react');
var Day = require('./Day.react');

var Schedule = React.createClass({

  render: function() {
    return (
      <div className="schedule">
        <div className="day-ttitle">Todays Schedule</div>
        <Day />
      </div>
    );
  }
});

module.exports = Schedule;
