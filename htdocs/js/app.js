/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 55
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

function init() {    
}


function OpenOutlookNewEmail()
{
    try
    {
        var body="Name : "+$("#contact_name").val()
            +"%0D%0AEmail : "+$("#contact_email").val()
            +"%0D%0AMobile : "+$("#contact_mobile").val()
            +"%0D%0ACompany : "+$("#contact_company").val()
            +"%0D%0AMessage : "+$("#contact_info").val();

        var str = "mailto:contactus@millennial.digital?subject=Enquiry on Millennial Digital&body="+body;
        window.location =  str;
    }
    catch(e)
    {
       alert(e);
        // act on any error that you get
    }
}