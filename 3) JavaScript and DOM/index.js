// step 1: random Number generator from 1-6
var randomnumber1 = Math.floor(Math.random()*6+1);
// step 2: random image generator
var randomimage1 = "dice"+randomnumber1+".png";
// step 3: random image source
var randomsrc1 = "images/"+randomimage1;
// step 4: change the source attribute for first image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc1);

// similarly for image 2
var randomnumber2 = Math.floor(Math.random()*6+1);
var randomimage2 = "dice"+randomnumber2+".png";
var randomsrc2 = "images/"+randomimage2;
var image2 = document.getElementsByTagName("img")[1];
image2.setAttribute("src",randomsrc2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins"
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
