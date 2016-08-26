var React = require('react');
var Modal = require('react-modal');
var AppointmentStore = require('../stores/AppointmentStore');

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

function getStateById(e) {
  //e.preventDefault();
  var state = getStateFromStores();
  return boxState = state[e];
}

var Hour = React.createClass({

  getInitialState: function() {
    // return {
    //   appointments: getStateFromStores(),
    //   modalIsOpen: false,
    //   backgroundColor: "white"
    // }
    return getStateFromStores();
  },


  componentDidMount: function() {
    //ThreadStore.addChangeListener(this._onChange);
    //UnreadThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    //ThreadStore.removeChangeListener(this._onChange);
    //UnreadThreadStore.removeChangeListener(this._onChange);
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
    console.log(e);
    // var newObj = this.state;
    // newObj[current] = {
    //
    // }

    this.setState({backgroundColor: 'red'});
    this._closeModal();
  },

  /**
   * Event handler for 'change' events coming from the stores
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  },


  render: function() {


    var name = " ";
    var number = " ";
    if(current){
      var state = this.state;
      name = state.name;
      number = state.phone;
    }


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
           <p>Name: {this.state['nine']['name']}</p>
           <p>Phone: {this.state['nine']['phone']}</p>
           <button onClick={this._processSubmit}>Submit</button>
         </Modal>
       </div>
      </div>
    );
  }


});

module.exports = Hour;
