function myFunction() {
    setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    var classPreLoader = document.getElementById("myDiv");
    classPreLoader.style.display = "block";
}
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function menu_click() {
    var links = document.getElementById("navlinks");
    var class_lines = document.getElementsByClassName("line");
    var class_close = document.getElementsByClassName("close");

    if (links.style.display === "block") {
        links.style.display = "none";
        for (i = 0; i < class_lines.length; i++) {
            class_lines[i].style.display = "block";
        }
        class_close[0].style.display = "none";
    } else {
        links.style.display = "block";
        for (i = 0; i < class_lines.length; i++) {
            class_lines[i].style.display = "none";
        }
        class_close[0].style.display = "block";


    }
}