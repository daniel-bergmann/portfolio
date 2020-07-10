

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
            document.getElementById("more").style.display = "inline";
            document.getElementById("dots").style.display = "none";
            document.getElementById("read").innerHTML = "See Less";
            i=1;
        }
        else{
            document.getElementById("more").style.display = "none";
            document.getElementById("dots").style.display = "inline";
            document.getElementById("read").innerHTML = "Read more";
            i=0;  
        }
    }

    // Article 2

    var i=0;
    function read2(){
        if(!i){
            document.getElementById("more2").style.display = "inline";
            document.getElementById("dots2").style.display = "none";
            document.getElementById("read2").innerHTML = "See Less";
            i=1;
        }
        else{
            document.getElementById("more2").style.display = "none";
            document.getElementById("dots2").style.display = "inline";
            document.getElementById("read2").innerHTML = "Read more";
            i=0;
        }
    }

        // Article 3

        var i=0;
    function read3(){
        if(!i){
            document.getElementsById("more3").style.display = "inline";
            document.getElementsById("dots3").style.display = "none";
            document.getElementsById("read3").innerHTML = "See Less";
            i=1;
        }
        else{
            document.getElementsById("more3").style.display = "none";
            document.getElementsById("dots3").style.display = "inline";
            document.getElementsById("read3").innerHTML = "Read more";
            i=0;  
        }
    }
    
    


// Other JS


