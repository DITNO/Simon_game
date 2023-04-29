var buttoncolours = ['red','blue','green','yellow'];

var gamePattern = [];

var userClickedPattern = [];


$('.btn').click(function(){
    
    var userChosenColour = $(this).attr('id');

    userClickedPattern.push(userChosenColour);

});


function nextsequence() {
    // var n = Math.random();
    // var n = n*4;
    // n = Math.floor(n);
    
    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColour = buttoncolours[randomNumber];
    
    gamePattern.push(randomChosenColour);


    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio('./sounds'+ randomChosenColour +'.mp3');
    audio.play();
}



