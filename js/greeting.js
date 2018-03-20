
/* $ global varible */
// var someSelector = prompt( "Give me a selector" );
var $h1 = $( "h1" );
var $user = $( "#user" );
var title = $h1.text();

function greetUser(){
    var firstName = $user.val();


    if( firstName ){
        $h1.text( title + " " + firstName );
        // document.querySelector( "h1" ).textContent = "Hello " + firstName + " Welcome to Michael Kelly Savvy Coders Website!";
    }

    function inputCallback( event ){
      if(event.which === 13){
        greetUser();
    }
}

/* $( "#header" ).on( "click", ()=> alert("hooray")
    greetUser );*/


$user.on( "keypress", inputCallback( event ) );
$( "#greet" ).on( "click", greetUser );


/* document
    .querySelector( "#header" )
    .addEventListener( "click",
        greetUser
        //  ()==> alert( "a thing" );
    );
*/
// greetUser();
//console.log( document.querySelectorAll( someSelector ) );
