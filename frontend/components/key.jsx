var KeyStore = require('../stores/KeyStore');
var React = require('react');
var ReactDOM = require('react-dom');
var TONES_CONSTANTS = require('../constants/Tones');
Note = require('../util/Note');

var Key = React.createClass({

  componentDidMount: function () {
    var note = new Note(TONES_CONSTANTS[this.props.noteName]);
    this.note = note;

    var that = this;
    this.keyToken = KeyStore.addListener(function () {
      if (KeyStore.all().includes(that.props.noteName)) {
        that.note.start();
      } else {
        that.note.stop();
      }
    });
  },

  componentWillUnmount: function () {
    this.keyToken.remove();
  },

  render: function () {
    return(
      <div>
        {this.props.noteName}
      </div>
    );
  }

});


module.exports = Key;
