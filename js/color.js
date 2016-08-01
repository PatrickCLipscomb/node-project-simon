function Color(color) {
  this.color = color;
}

Color.prototype.randomOrder = function() {
  var randomColorArr = [];
  var colors = ['red', 'green', 'blue', 'yellow'];
  while (randomColorArr.length < 100) {
    var color = (colors[Math.floor(Math.random() * 4)]);
    randomColorArr.push(color);
  }
  return randomColorArr;
};


exports.colorModule = Color;

// 
// while (playerScore < counter) {
//   setInterval(function(){
