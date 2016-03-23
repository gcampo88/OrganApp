var KeyStore = require('../stores/KeyStore');
var React = require('react');
var ReactDOM = require('react-dom');
var TONES_CONSTANTS = require('../constants/Tones');
var Key = require('./key');
var Recorder = require('./recorder');

var Organ = React.createClass({

  render: function () {
    var keys = Object.keys(TONES_CONSTANTS).map(function (key, i) {
        return <Key noteName={key} key={i} />;
      });

    return(
      <section>
       {keys}
       <h1>Record a Track!</h1>
       <Recorder />
      </section>
    );
  }
});


module.exports = Organ;
