var React = require('react');
var ReactDOM = require('react-dom');
var KeyStore = require('../stores/KeyStore');
var Track = require('../util/Track');

var Recorder = React.createClass({
  getInitialState: function () {
    return( {
      isRecording: false,
      track: new Track()
    });
  },

  componentDidMount: function () {
    KeyStore.addListener(function () {
      this.state.track.addNotes(KeyStore.all());
    });
  },

  handleClick: function (e) {
    e.stopPropagation();
    if (this.state.isRecording) {
      this.state.track.stopRecording();
    } else {
      this.state.track.startRecording();
    }
    this.setState({ isRecording: !this.state.isRecording });
  },

  render: function () {
    console.log(this.state.isRecording);

    var buttonText = this.state.isRecording ? "Stop" : "Start";
    return(
      <section>
        <label>Track Name:
          <input type="text"
            value={this.state.track.name}
            placeholder="track name here..">
          </input>
        </label>
        <button onClick={this.handleClick}>{buttonText}</button>
      </section>
    );
  }

});


module.exports = Recorder;
