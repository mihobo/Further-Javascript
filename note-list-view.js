(function(exports){
  function NotelistView(notelist) {
    this.nlmodel = notelist;
  };

  NotelistView.prototype.displayNotes = function () {
    for (var i = 0; i < this.nlmodel.length; i++) {
    return "<ul><li><div>" + this.nlmodel[i].text + "</div></li>";
    }
  };

exports.NotelistView = NotelistView;
})(this);
