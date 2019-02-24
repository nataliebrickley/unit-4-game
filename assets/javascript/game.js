//Define starter values:
var wins = 0;
var losses = 0;
var total = 0;
//Generate a random number between 19 and 120
var random = Math.floor(Math.random()*102)+19;
//Display the starter values and random number on the page
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(total);
$("#randomNumber").text(random);