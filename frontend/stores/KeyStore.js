var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');
var NoteConstants = require('../constants/NoteConstants');

var KeyStore = new Store(Dispatcher);
var _currentKeys = [];

KeyStore.all = function () {
  var allCurrentKeys = _currentKeys.slice();
  return allCurrentKeys;
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case NoteConstants.keyPressed:
      if (!_currentKeys.includes(payload.noteName)) {
        _currentKeys.push(payload.noteName);
        this.__emitChange();
      }
      break;
    case NoteConstants.keyReleased:
      var i = _currentKeys.indexOf(payload.noteName);
      _currentKeys.splice(i, 1);
      this.all();
      this.__emitChange();
      break;
  }
};

module.exports = KeyStore;
