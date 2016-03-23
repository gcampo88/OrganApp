var Dispatcher = require('../dispatcher/Dispatcher');
var NoteConstants = require('../constants/NoteConstants');

var KeyActions = {
  keyPressed: function (key) {
    var payload = {
      actionType: NoteConstants.keyPressed,
      noteName: key
    };
    Dispatcher.dispatch(payload);
  },

  keyUp: function (key) {
    var payload = {
      actionType: NoteConstants.keyReleased,
      noteName: key
    };
    Dispatcher.dispatch(payload);
  }

  

};


module.exports = KeyActions;
