(function(exports){
  function NotelistView(notelist) {
    this.nlmodel = notelist;
  };

  NotelistView.prototype.displayNotes = function () {
    if (this.nlmodel.length >= 1) {
      for (var i = 0; i < this.nlmodel.length; i++) {
      return "<ul><li><div>" + this.nlmodel[i].text + "</div></li>";
     }
    } else {
        return ""
    };
  };

exports.NotelistView = NotelistView;
})(this);


// generate HTML for notelist
// generate word for one note
// use map rather than forEach??
