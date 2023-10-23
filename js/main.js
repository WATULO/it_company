// scroll indicator start
  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    });
  });
// scroll indicator end
  
//back to top start
  mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
//back to top end

//change navbar background color on scroll start
  $(window).scroll(function(){
    $("nav").toggleClass("scrolled", $(this).scrollTop()>50);
  })
//change navbar background color on scroll end
  
//navbar toggler icon start
  function myFunction(x) {
    x.classList.toggle("change");
  }
//navbar toggler icon end

//initiate gallery light box start
const galleryLightbox = GLightbox({
  selector: '.gallery-lightbox'
});
//initiate gallery light box end

//technology start
$(document).ready(function () {
  var targetParent = $(".progress");
  targetParent.each(function () {
    //required variables
    var target = $(this).children();
    var offsetTop = $(this).offset().top;
    var winHeight = $(window).height();
    // var data_width = target.attr("aria-valuenow") + "%";

    //animation starts
    if (winHeight > offsetTop) {
      target.addClass("animateBar");
    }

    //animation with scroll
    $(window).scroll(function () {
      var scrollBar = $(this).scrollTop();
      var animateStart = offsetTop - winHeight;
      if (scrollBar > animateStart) {
        target.addClass("animateBar");
      }
    });
  });
});
//technology end


















