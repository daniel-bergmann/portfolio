

// Welcome to my JS file!



// Rotating selfie effect

// The selfie rotates by the amount the window is scrolled in pixels, converted into degrees, the selfie is rotating counter-clockwise.

var selfie = document.getElementById("selfie");
    
window.addEventListener("scroll", function() {
    selfie.style.transform = "rotate("+window.pageYOffset+"deg)";
});


// Read more read less toggle switch for articles

// Article 1

function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

//   Article 2

function read2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("read2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// Other JS


