let mainNav = document.getElementById('main-nav');
let navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click', function () {
  if (this.classList.contains('active')) {
    // mainNav.style.display = "none";
    mainNav.classList.remove('active-nav');
    this.classList.remove('active');
  } else {
    // mainNav.style.display = "flex";
    mainNav.classList.add('active-nav');
    this.classList.add('active');
  }
});


// Scroll to a certain element
// function goToLoc(loc) {
//   var elem = document.getElementById(loc);
//   elem.scrollIntoView({
//     behavior: "smooth"
//   });
// }

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // $(document).ready(function() {
  
  //   var scrollLink = $('.scroll');
    
  //   // Smooth scrolling
  //   scrollLink.click(function(e) {
  //     e.preventDefault();
  //     $('body,html').animate({
  //       scrollTop: $(this.hash).offset().top
  //     }, 1000 );
  //   });
    
  //   // Active link switching
  //   $(window).scroll(function() {
  //     var scrollbarLocation = $(this).scrollTop();
      
  //     scrollLink.each(function() {
        
  //       var sectionOffset = $(this.hash).offset().top - 20;
        
  //       if ( sectionOffset <= scrollbarLocation ) {
  //         $(this).parent().addClass('active');
  //         $(this).parent().siblings().removeClass('active');
  //       }
  //     })
      
  //   })
    
  // })