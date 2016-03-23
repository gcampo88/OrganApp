var KeyActions = require('../actions/KeyActions');

var Track = function (attr) {
  if (attr) {
    this.name = attr.name;
    this.roll = attr.roll;
  }
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = new Date();
};

Track.prototype.addNotes = function (notes) {
    this.roll.push({
    timeSlice: (new Date() - this.startTime),
    notes: notes,
  });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
   if (this.interval) {
     return;
   }
   var playbackStartTime = new Date();
   var currentNote = 0;

   this.interval = setInterval(function () {
     if (currentNote < this.roll.length) {
       if ((new Date() - playbackStartTime) === this.roll[currentNote].timeSlice) {
         this.roll[currentNote].notes.forEach(function (note) {
           KeyActions.keyUp(note);
         });
       } else if (new Date() - playbackStartTime > this.roll[currentNote].timeSlice) {
         this.roll[currentNote].notes.forEach(function (note) {
           KeyActions.keyPressed(note);
         });
         currentNote += 1;
       }

     }
   }, 100);
};

module.exports = Track;
