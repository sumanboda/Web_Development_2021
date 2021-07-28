// detecting sounds on clicking

var numberofdrumsticks = document.querySelectorAll(".drum").length;
var i=0;
while (i<numberofdrumsticks) {
  //document.querySelectorAll(".drum")[i].addEventListener("click",responseonclick);
  document.querySelectorAll(".drum")[i].addEventListener("click",buttonInnerHTML);
  i++
}

function responseonclick() {
  var audio = new Audio("sounds/tom-1.mp3")
  audio.play()
}

function buttonInnerHTML() {
  var button = this.innerHTML
  makeSound(button)
  buttonAnimation(button)
}

// detecting key board sound
document.addEventListener("keypress",press);
function press(event) {
  makeSound(event.key)
  buttonAnimation(event.key)
}


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

// after clicking the button it show shade a bit

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

// after some time the shaded one should be removed
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 150);

}
