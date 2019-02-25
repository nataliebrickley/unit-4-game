//Define starter values:
var wins = 0;
var losses = 0;
var total = 0;
//Generate a random number between 19 and 120
var random = Math.floor(Math.random()*102)+19;
//Generate a random number between 1 and 12 for each gem
var gem1 = Math.floor(Math.random()*12)+1;
var gem2 = Math.floor(Math.random()*12)+1;
var gem3 = Math.floor(Math.random()*12)+1;
var gem4 = Math.floor(Math.random()*12)+1;
//Display the starter values and random number on the page
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(total);
$("#randomNumber").text(random);
//When the user clicks on a gem, add the gem value to the total
$("#gem1").on("click", function() {
    total = total + gem1;
    $("#score").text(total);
})
$("#gem2").on("click", function() {
    total = total + gem2;
    $("#score").text(total);
})
$("#gem3").on("click", function() {
    total = total + gem3;
    $("#score").text(total);
})
$("#gem4").on("click", function() {
    total = total + gem4;
    $("#score").text(total);
})