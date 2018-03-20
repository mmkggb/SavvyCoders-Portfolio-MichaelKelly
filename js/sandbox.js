/* globals  $ */
var css = {
    "position": "fixed",
    "background-color": "purple",
    "top": 0
};
var animations = {
    "font-size": "500%",
    "top": "20vh"
};
var $h1 = $( "" );

function animateH1(){
    $h1.animate( { "left": "100vh" } );
}
var animationOptions = {
    "duration": 5000,
    "complete": animateH1
};
var $p = $( "<p>" ).text( "Because I need to know!" );

$h1 = $( "<h1>" ).text( "Just testing if this works" ).animate( animations, animationOptions );

$( "#sandboxItems" )
    .on( "click", () => $( "ul" ).css( "color", "green" ) );


$( "#output" )
    .css( css )
    .append( $h1, $p );
