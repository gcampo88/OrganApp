var KeyActions = require("../actions/KeyActions");

var KeyListener = {

  keydown: function () {
    $(document).keydown(function (event) {
      var key = Mapping[event.which];
      if (key === undefined) {
        return;
      }
      KeyActions.keyPressed(key);
    });
  },

  keyup: function () {
    $(document).keyup(function (event) {
      var key = Mapping[event.which];
      if (key === undefined) {
        return;
      }
      KeyActions.keyUp(key);
    });
  },

  bindEvents: function () {
    this.keydown();
    this.keyup();
  }
};

var Mapping = {
  67: "C",
  49: "CSHARP",
  68: "D",
  50: "DSHARP",
  69: "E",
  70: "F",
  51: "FSHARP",
  71: "G",
  52: "GSHARP",
  65: "A",
  53: "ASHARP",
  66: "B",
};



module.exports = KeyListener;
