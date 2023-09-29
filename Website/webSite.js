//Dark Mode----------------------------------------------------------
var mode='night';
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    mode = urlParams.get('mode');


    var content = document.getElementsByTagName('body')[0];
    var contextColor = document.getElementsByClassName('context');
    var navColor = document.getElementsByClassName('navbar');


    // Apply the mode to the body class
    if (mode == 'light') {
        mode='light';
        content.classList.toggle('light');

        for (var i = 0; i < contextColor.length; i++) {
            contextColor[i].classList.toggle('light');
        }

        for (var i = 0; i < navColor.length; i++) {
            navColor[i].classList.toggle('light');
        }
    } else {
        mode='night';
        content.classList.toggle('night');

        for (var i = 0; i < contextColor.length; i++) {
            contextColor[i].classList.toggle('night');
        }

        for (var i = 0; i < navColor.length; i++) {
            navColor[i].classList.toggle('night');
        }
    }
});


function navigateToNewPage() {
    // Change the location to the new HTML file
    window.location.href = '../index.html?mode=' + mode;
}