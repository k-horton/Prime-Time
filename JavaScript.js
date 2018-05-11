/*
* Takes input from the form submission and
* puts it into the isPrime() function.
*/
function checkPrime() {
    var input = document.getElementById('num').value;
    document.getElementById('output').innerHTML = "Checking...";

    // give the page a second to display the "checking..." message
    setTimeout(function () { document.getElementById('output').innerHTML = isPrime(input) }, 100);
}

/**
* Function to test whether or not a number is prime.
**/
function isPrime(val) {
    // initialize string
    var returnString = "It's prime!";

    // error trap for values larger than 16 bytes
    if (val.length > 16) {
        returnString = "Error: value too large.";
    }
    // error trap for non-numerical data
    else if (isNaN(val)) {
        returnString = "Error: Please enter an integer!";
    }
    else {
        // check if it's above 1
        if (val < 1) {
            returnString = "The number needs to be greater than 1!";
        }
        // check if it's even (excluding the number 2)
        if (val % 2 === 0 && val > 2) {
            returnString = "Not prime.";
        }
        else {
            /* set limit to square root of
            * value, adding 1 as a buffer to
            * round up */
            var limit = Math.sqrt(val) + 1;

            /* go through odd numbers, up to
            * the limit, to test if it's prime */
            for (var i = 3; i < limit; i += 2) {
                if (val % i === 0) {
                    returnString = "Not prime.";
                }
            }
        }
    }
    return returnString;
}

$(document).ready(function () {
    /* blinking function (that I found, 
    * I didn't write it - it's just for fun!) */
    function blinker() {
        $('.blinkMe').fadeOut(500);
        $('.blinkMe').fadeIn(500);
    }
    setInterval(blinker, 1000);
});