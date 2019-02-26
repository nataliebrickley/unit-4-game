//Define starter values:
var wins = 0;
var losses = 0;
var total = 0;
//Generate a random number between 19 and 120
var random = Math.floor(Math.random() * 102) + 19;
//Generate a random number between 1 and 12 for each gem
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;
//Display the starter values and random number on the page
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(total);
$("#randomNumber").text(random);
//Create an array that includes the 4 different gem values and an array of images
gemValues = [gem1, gem2, gem3, gem4];
images = ["assets/images/iconfinder_Aquamarine_127303.png", "assets/images/iconfinder_Citrine_127311.png", "assets/images/iconfinder_diamond_gem_ruby_66340.png", "assets/images/iconfinder_Emerald_127302.png"];
//create a loop that...
for(var i=0; i<4; i++) {
    //...generates 4 different images
    var gemImage = $("<img>");
    //...assigns each img a different src from the image array
    gemImage.attr("src", images[i]);
    //...assigns each img with a different data-value from the gemValues array
    gemImage.attr("data-value", gemValues[i]);
    //...adds the gem img to the page
    $(".gems").append(gemImage);
}
//When the user clicks on a gem, add the gem value to the total
$("img").on("click", function(){
    total += parseInt($(this).attr("data-value"));
    $("#score").text(total);    
    //If the total = the random number...
    if (total === random) {
        //...we add 1 to their total wins
        wins++;
        $("#wins").text(wins);
        //...alert the winner
        alert("Congratulations! You WON!")
        //...and reset the game
        reset();
    }
    //If the total > random number...
    if(total > random) {
        //we add 1 to their total losses
        losses++;
        $("#losses").text(losses);
        //...alert the winner
        alert("Sorry! You LOST! Better luck next time!")
        //...and reset the game
        reset();
    }
})

function reset() {
    total = 0;
    $("#score").text(total);
    random = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(random);
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
}





