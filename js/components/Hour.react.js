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

function getStateFromStores() {
  return AppointmentStore.getAppointments();
}

var Hour = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  _openModal: function(e) {
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
    this.setState({backgroundColor: 'red'});
    var ret = SetMeeting.setMeeting("Ani", "34123414", "ten");
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


  render: function() {

    console.log(" HOUR STATE", this.state);
    //console.log(this.state[this.props.c].name);

    return (
      <div className="hour-block" onClick={this._openModal} style={{backgroundColor:this.state.backgroundColor}}>
        <div className={this.props.c}><b>{this.props.name}</b>

          <Modal
           isOpen={this.state.modalIsOpen}
           onRequestClose={this._closeModal}
           style={customStyles}>
           <h2>Enter Info: </h2>
           <form>
             <p>Name: <input /></p>
             <p>Phone: <input /></p>
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
