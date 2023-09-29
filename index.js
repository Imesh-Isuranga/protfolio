
//Dark Mode-------------------------------------------------------------------------------
var mode='night';
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
var contextColor = document.getElementsByClassName('context');
var contextBorderColor = document.getElementsByClassName('contextBorder');
var common = document.getElementsByClassName('common');
var navbar = document.getElementsByClassName('navbar');

darkMode.addEventListener('click', function () {
    mode=='night' ? mode='light': (mode=='light' ? mode='night' : mode='light');
    darkMode.classList.toggle('active');
    content.classList.toggle('light');

    for (var i = 0; i < contextColor.length; i++) {
        contextColor[i].classList.toggle('light');
    }

    for (var i = 0; i < contextBorderColor.length; i++) {
        contextBorderColor[i].classList.toggle('light');
    }

    for (var i = 0; i < common.length; i++) {
        common[i].classList.toggle('light');
    }

    for (var i = 0; i < navbar.length; i++) {
        navbar[i].classList.toggle('light');
    }
});


function navigateToNewPage(path) {
    // Get the current mode (dark or light)
    // Change the location to the new HTML file with the mode as a query parameter
    window.location.href = path + '?mode=' + mode;
}


document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    mode = urlParams.get('mode');


    var content = document.getElementsByTagName('body')[0];
    var darkMode = document.getElementById('dark-change');
    var contextColor = document.getElementsByClassName('context');
    var contextBorderColor = document.getElementsByClassName('contextBorder');
    var common = document.getElementsByClassName('common');
    var navbar = document.getElementsByClassName('navbar');



    // Apply the mode to the body class
    if (mode === 'light') {
        mode='light';
        content.classList.toggle('light');

        for (var i = 0; i < contextColor.length; i++) {
            contextColor[i].classList.toggle('light');
        }

        for (var i = 0; i < contextBorderColor.length; i++) {
            contextBorderColor[i].classList.toggle('light');
        }

        for (var i = 0; i < common.length; i++) {
            common[i].classList.toggle('light');
        }

        for (var i = 0; i < navbar.length; i++) {
            navbar[i].classList.toggle('light');
        }
    } else {
        mode='night';
        content.classList.toggle('night');

        for (var i = 0; i < contextColor.length; i++) {
            contextColor[i].classList.toggle('night');
        }

        for (var i = 0; i < contextBorderColor.length; i++) {
            contextBorderColor[i].classList.toggle('night');
        }

        for (var i = 0; i < common.length; i++) {
            common[i].classList.toggle('night');
        }

        for (var i = 0; i < navbar.length; i++) {
            navbar[i].classList.toggle('night');
        }
    }
});



