var React = require('react');
var Hour = require('./Hour.react');

function getStateFromStores() {
  return null;
}

var Day = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    var hours = [];
    for(var i = 9; i<=5; i++){
      hours.push(<Hour />);
    }
    return (
      <div className="day-block">
        <Hour name={"9:00 - 10:00"}/>
        <Hour name={"10:00 - 11:00"}/>
        <Hour name={"11:00 - 12:00"}/>
        <Hour name={"12:00 - 1:00"}/>
        <Hour name={"1:00 - 2:00"}/>
        <Hour name={"2:00 - 3:00"}/>
        <Hour name={"3:00 - 4:00"}/>
        <Hour name={"4:00 - 5:00"}/>
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