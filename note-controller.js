(function(exports){
  function changeText(newText) {
    var appScript = document.getElementById("app").innerHTML = newText;
    console.log(appScript)
  };
  exports.changeText = changeText;
})(this);
