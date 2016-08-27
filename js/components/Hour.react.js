var React = require('react');
var Modal = require('react-modal');
var AppointmentStore = require('../stores/AppointmentStore');
var SetMeeting = require('../actions/ClickSetMeeting');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var current = null;

var name = null;
var number = null;

function getStateFromStores() {
  return AppointmentStore.getAppointments();
}

var Hour = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  _openModal: function(e) {
    console.log(e.target)
    current = e.target.className;
    //console.log(this.state[current]['name'])
    this.setState({modalIsOpen: true});
  },

  _closeModal: function(e) {
    this.setState({modalIsOpen: false});
  },

  /*
   * Updates state.
   */
  _processSubmit: function(e) {
    e.preventDefault();
    console.log(current)
    this.setState({backgroundColor: 'red'});
    var ret = SetMeeting.setMeeting(name, number, current);
    this._onChange();
    this._closeModal();
    this.forceUpdate();
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
    console.log(this.state);
  },

  _getNameVal: function(e) {
    name = e.target.value;

  },

  _getNumberVal: function(e) {
    number = e.target.value;

  },


  render: function() {

    console.log(" HOUR STATE", this.state);

    return (
      <div className="hour-block" onClick={this._openModal} style={{backgroundColor:this.state.backgroundColor}}>
        <div className={this.props.c}><b>{this.props.name}</b>

          <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this._closeModal}
           style={customStyles}>
           <h2>Enter Info: </h2>
           <form>
             <p>Name: <input onChange={this._getNameVal} /></p>
             <p>Phone: <input onChange={this._getNumberVal} /></p>
           </form>
           <h2>Current Meeting: </h2>
           <p>Name: {this.state[this.props.c].name} </p>
           <p>Phone: {this.state[this.props.c].phone}</p>
           <button onClick={this._processSubmit}>Submit</button>
         </Modal>
       </div>
      </div>
    );
  }


});

module.exports = Hour;
