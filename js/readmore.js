

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

  //   Article 4

  function read4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("read4");
  
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

    //   Article 5

function read5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("read5");

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

    //   Article 6

    function read6() {
      var dots = document.getElementById("dots6");
      var moreText = document.getElementById("more6");
      var btnText = document.getElementById("read6");
    
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

        //   Article 7

        function read7() {
          var dots = document.getElementById("dots7");
          var moreText = document.getElementById("more7");
          var btnText = document.getElementById("read7");
        
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

