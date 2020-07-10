

// Welcome to my JS file!



// Rotating selfie effect

// The selfie rotates by the amount the window is scrolled in pixels, converted into degrees, the selfie is rotating counter-clockwise.

var selfie = document.getElementById("selfie");
    
window.addEventListener("scroll", function() {
    selfie.style.transform = "rotate("+window.pageYOffset+"deg)";
});


// Read more read less toggle switch for articles

// Article 1

    var i=0;
    function read(){
        if(!i){
            document.getElementsByClassName("more").style.display = "inline";
            document.getElementsByClassName("dots").style.display = "none";
            document.getElementsByClassName("read").innerHTML = "See Less";
            i=1;
        }
        else{
            document.getElementsByClassName("more").style.display = "none";
            document.getElementsByClassName("dots").style.display = "inline";
            document.getElementsByClassName("read").innerHTML = "Read more";
            i=0;  
        }
    }

// Other JS


