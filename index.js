var buttoncolours = ['red','blue','green','yellow'];

var gamePattern = [];

var userClickedPattern = [];


$('.btn').click(function(){
    
    var userChosenColour = $(this).attr('id');

    userClickedPattern.push(userChosenColour);

    playsound(userChosenColour);

    animatePress(userChosenColour);

});


function nextsequence() {
    // var n = Math.random();
    // var n = n*4;
    // n = Math.floor(n);
    
    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColour = buttoncolours[randomNumber];
    
    gamePattern.push(randomChosenColour);


    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);
    
}

function playsound(name){
//taking the name parameter from the above function where we getting the id through the btn click,
//its the first function above.
    var audio = new Audio('./sounds'+ name +'.mp3');
    audio.play();
}

function animatePress(currentcolour){
    // $('.btn').click.addClass('Pressed');
//the current colour gets picked up from the function above where we are getting
//the btn id through press , all the elemets are taking parameter from it only.
    $('#' + currentcolour).addClass('Pressed');

    setTimeout(function(){
        $('#' + currentcolour).removeClass('pressed');
    },100);
}

