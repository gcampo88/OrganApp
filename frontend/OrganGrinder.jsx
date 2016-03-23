var React = require('react');
var ReactDOM = require('react-dom');
var KeyListener = require('./util/KeyListener');
var Organ = require('./components/organ');

KeyListener.bindEvents();

$(document).ready(function () {
  ReactDOM.render(<Organ/> , document.getElementById("content"));
});
