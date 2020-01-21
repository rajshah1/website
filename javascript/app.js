function myFunction() {
    setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    var classPreLoader = document.getElementById("myDiv");
    classPreLoader.style.display="block";   
}



function menu_click(){
    var links=document.getElementById("navlinks");
    var class_lines=document.getElementsByClassName("line");
    var class_close=document.getElementsByClassName("close");
    
    if (links.style.display === "block"){
        links.style.display = "none";
        for(i=0;i<class_lines.length;i++){
            class_lines[i].style.display = "block";
        }
       class_close[0].style.display = "none";
    }
    else{
        links.style.display = "block";
        for(i=0;i<class_lines.length;i++){
            class_lines[i].style.display = "none";
        }
        class_close[0].style.display = "block";
        

    }
}
     
    /*
    var check_display = getComputedStyle(document.querySelector("#navlinks"));
    if (check_display.display==="block"){;
        check_display.display="none";
    }
    else{
        check_display.display = "block"; 
    }
    if(check_display.style.display==="none"){
        check_display.style.display="block";
    }*/
    //check_display.namedItem(display);.

