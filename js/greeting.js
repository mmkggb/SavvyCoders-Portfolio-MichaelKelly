var greetUser = function greetUser(){
    var firstName = prompt( "What's your name" );

    if( !firstName ){
        greetUser();
    }
    else{
        alert( "Hello " + firstName );
    }
};

greetUser();
