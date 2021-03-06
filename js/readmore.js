

// Welcome to my JS file!



// Rotating selfie effect

// The selfie rotates by the amount the window is scrolled in pixels, converted into degrees, the selfie is rotating counter-clockwise.

var selfie = document.getElementById("selfie");
    
window.addEventListener("scroll", function() {
    selfie.style.transform = "rotate("+window.pageYOffset+"deg)";
});


// load more content button on the bottom of the page
// It uses Jquery

$(function(){
  $(".read-more").slice(0, 3).show(); // select the first ten
  $("#load").click(function(e){ // click event for load more
      e.preventDefault();
      $(".read-more:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
      if($(".read-more:hidden").length == 0){ // check if any hidden divs still exist
          alert("That's All Folks!"); // alert if there are none left
      }
  });
});

// Read more read less toggle button for the first 3 articles that appear on the frontpage blog

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

  //   Article 3

function read3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("read3");
  
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

 // End of read more read less toggle button