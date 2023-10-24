var squares = document.getElementsByClassName('square');

for(var i = 0; i < squares.length; i++) {
squares[0].addEventListener("click", changeColor);
}

function changeColor(event) {
event.style.backgroundColor = randomColor();
}


function randomColor() {

var randomRed = Math.floor(Math.random() * 255);
var randomGreen = Math.floor(Math.random() * 255);
var randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘random color’
var randomColor = "rgb("+ randomRed +","+ randomGreen +","+ randomBlue +")";

return randomColor;
}