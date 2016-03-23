var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/Dispatcher');
var TONES_CONSTANTS = require('./constants/Tones');
var Note = require('./util/Note');
var KeyListener = require('./util/KeyListener');
var Key = require('./components/key');

KeyListener.bindEvents();

$(document).ready(function () {
  ReactDOM.render(<Key noteName="C" /> , document.getElementById("content"));
});
