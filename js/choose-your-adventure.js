var story = {
    "CloudBalanceWalk": "You will have to walk 5 feet across steel cables with no saftey net, 20 stories high. Alternatively 'BumperCarts' will take the extra edge off!!",
    "YoYoBungeeJump": "A single YoYo string will be supporting your weight after jumping off the golden gate bridge in San Fransico. Alternatively drop down by nature's creek to give 'BearHugs' of your life! ",
    "HighSpeedBumperCarts": "You will be playing bumper carts along the iciest mountain roads of Alaska. Alternatively 'Race2Finish' by the docking bay on foot.",
    "Race2TheFinish": "Run as fast as you can barefoot 5 yards across the thorn litered field. Alternatively 'BalanceWalk' to the house of failures.",
    "BearHugs": "Hug a bear as tightly as you can for 3 minutes as you try to not have your flesh ripped to shreds like pulled pork! Alternatively" + " 'BungeeJump'" + " off a cliff.",
    "Quit": "Fear is not a factor for you, for you are dead!!"
};

/*
var choice = prompt( story.BearHugs );
var output = document.querySelector( "output" );

if( choice === "BearHugs" ){
    console.log( story.BearHugs );
    prompt( story[choice] );
    output.textContent = story.BearHugs;
}
else if( choice === "Race2TheFinish" || choice === "YoYoBungeeJump" ){
    console.log( story[choice] );
    prompt( story[choice] );
    output.textContent = story[choice];
}

else if( choice === "HighSpeedBumperCarts" || choice === "CloudBalanceWalk" ){
    console.log( story.HighSpeedBumperCarts );
    prompt( story[choice] );
    var choice2 = prompt( story[choice] );

    output.textContent = story[choice];
    if( choice2 === "Race2Finish" ){
        alert( story.Race2TheFinish );
    }
}
else{
    prompt( "Not a real path" );
}

*/

var choice = prompt( story.BearHugs );
var end = false;

while( end != true ){
    if( choice === "Quit" ){
        end = true;
        alert( story[choice] );
        $( "#output" ).text( story[choice] );
    }
    else if( choice === "Race2TheFinish" || choice === "YoYoBungeeJump" || choice === "HighSpeedBumperCarts" || choice === "CloudBalanceWalk" ){
        $( "#output" ).text( story[choice] );
        choice = prompt( story[choice] );
    }
}

$( "#btn" ).click( function(){
    $( "body" ).css( "background-color", "blue" );
} );
