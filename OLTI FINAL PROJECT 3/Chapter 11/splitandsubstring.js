// Fig 11.9: Splitandsubsting.js
// String object methods split and substring/
function splitButtonPressed()
{
    var inputString = document.getElementById( "inputField" ).value;
    var tokens = inputString.split( "" );

    var results = document.getElementById( "results" );
    results.innerHTML = "<p>The sentence split into words is: </p>" + "p class = 'indent'>" + 
        tokens.join( "</p><p class = 'indent'>" ) + "</p>" + 
        "<p>The first 10 charachters of the input string are: </p>" + 
        "<p class = 'indent'>" + inputString.substring( 0, 10 ) + "<p>";
}// end function splitButtonPressed

// register click event handler for serachButton
function start ()
{
    var splitButton = document.getElementById( "splitButton" );
    splitButton.addEventListener( "click", splitButtonPressed, false );
} // end function start

window.addEventListener ( "load", start, false );