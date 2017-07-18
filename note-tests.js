function testNoteTakeText(){
  var note = new Note('Javascript is sexy!');
  assert.isTrue(note.text === 'Javascript is sexy!');
};

testNoteTakeText();


function testNoteList(){
  var notelist = new Notelist();
  assert.isTrue(notelist.noteModels.length === 0);
};

testNoteList();


function testNoteInArray(){
  var notelist = new Notelist();
  var note = new Note("Too sexy to code");
  notelist.pushToNoteModels(note);
  assert.isTrue(notelist.noteModels.length === 1);
  assert.isTrue(notelist.noteModels[0].text === "Too sexy to code");
};

testNoteInArray();

// function testViewNoteList(){
//   var notelist = new Notelist();
//   var note = new Note("Coding is sexy!");
//   notelist.pushToNoteModels(note);
//   assert.isTrue();
// };
//
// testNoteInArray();
