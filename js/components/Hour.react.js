var React = require('react');
var Modal = require('react-modal');

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

function getStateFromStores() {
  return null;
}

var Hour = React.createClass({

  getInitialState: function() {
    return {
      appointments: getStateFromStores(),
      modalIsOpen: false,
      backgroundColor: "white"
    }
  },


  componentDidMount: function() {
    //ThreadStore.addChangeListener(this._onChange);
    //UnreadThreadStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    //ThreadStore.removeChangeListener(this._onChange);
    //UnreadThreadStore.removeChangeListener(this._onChange);
  },

  _openModal: function() {
    this.setState({modalIsOpen: true});
  },

  _closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  /*
   * Updates state with user info and backround color.
   */
  _processSubmit: function(e) {
    e.preventDefault();
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

    return (
      <div className="hour-block" onClick={this._openModal} style={{backgroundColor:this.state.backgroundColor}}>
        <div className="time"><b>{this.props.name}</b></div>
        <Modal
         isOpen={this.state.modalIsOpen}
         onRequestClose={this._closeModal}
         style={customStyles}>
         <h2>Enter Info</h2>
         <form>
           <p>Name: <input /></p>
           <p>Phone: <input /></p>
         </form>
         <h2>Current Meeting</h2>
          
         <button onClick={this._processSubmit}>Submit</button>
       </Modal>
      </div>
    );
  }


});

module.exports = Hour;
