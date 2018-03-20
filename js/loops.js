var output = document.querySelector( "#output" );
var list = "<ol>";
var fizzyBuzz = "<ul>";

for( let i = 1; i < 11; i++ ){
    list += "<li>" + i + "</li>";
}

list += "</ol>";


for( let i = 1;  i <= 100; i++ ){
    if( i % 3 === 0 && i % 5 === 0 ){
        fizzyBuzz += "<li>FizzBuzz</li>";
    }
    else if( i % 3 === 0 ){
        fizzyBuzz += "<li>Fizz</li>";
    }
    else if( i % 5 === 0 ){
        fizzyBuzz += "<li>Buzz</li>";
    }
    else{
        fizzyBuzz += "<li>" + i + "</li>";
    }
}
fizzyBuzz += "</ul>";
output.innerHTML = list + fizzyBuzz;
