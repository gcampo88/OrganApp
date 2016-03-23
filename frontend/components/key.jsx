var KeyStore = require('../stores/KeyStore');
var React = require('react');
var ReactDOM = require('react-dom');
var TONES_CONSTANTS = require('../constants/Tones');
var Note = require('../util/Note');

var Key = React.createClass({
  getInitialState: function () {
      return( { pressed: "" });
  },

  componentDidMount: function () {
    var note = new Note(TONES_CONSTANTS[this.props.noteName]);
    this.note = note;

    var that = this;
    this.keyToken = KeyStore.addListener(function () {
      if (KeyStore.all().includes(that.props.noteName)) {
        that.note.start();
        that.setState({ pressed: " pressed"});
      } else {
        that.note.stop();
        that.setState({ pressed: "" });
      }
    });
  },

  componentWillUnmount: function () {
    this.keyToken.remove();
  },

  render: function () {
    var className = (this.props.noteName.length > 1) ? "sharp" : "regular";
    className += this.state.pressed;

    return(
      <div className={className}>
        {this.props.noteName}
      </div>
    );
  }

});


module.exports = Key;
