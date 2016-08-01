var Color = require('./../js/color.js').colorModule;

var playerScore = 0;
var counter = 12;
function writeColor(color) {
  $("#colors").append('<li><div style="background:' + color + '"  id="' + color + '" class="color-block"></div></li>');
}


$(document).ready(function() {
  $('#play-the-game').on('click', function() {
    var dummyColor = new Color('cyan');
    var randomColor = [];
    var color = null;
    var colors = [];
    randomColor = dummyColor.randomOrder();
    for (var i = 0; i < counter; i++) {
      color = randomColor[i];
      colors.push(color);
    }
    setTimeout(function(){ colors.forEach(function(color) { writeColor(color); }) }, 1000);
  });
});
