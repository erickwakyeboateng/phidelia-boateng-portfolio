

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
  
    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  


  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });

/*
//Send Mail
  function sendMail(){
    let parms = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }
    emailjs.send("service_mjcgaaq","template_jrfxmf4",parms).then(alert("Message Sent!!!"))
  }

*/


function sendMail() {
  // Get values from the input fields
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  // Check if any field is empty
  if (!fullname || !email || !message) {
    alert("Please fill in all fields.");
    return; // Exit the function if validation fails
  }
  
  // Create parameters for the email
  let parms = {
    fullname: fullname,
    email: email,
    message: message,
  };
  
  // Send the email using emailjs
  emailjs.send("service_mjcgaaq", "template_jrfxmf4", parms)
    .then(() => {
      alert("Message Sent!!!"); // Show success message
    })
    .catch((error) => {
      console.error("Error sending message:", error); // Handle any errors
      alert("Failed to send message. Please try again.");
    });
}
