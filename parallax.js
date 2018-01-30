/**
 * Parallax Scrolling
 * Created by C-Pres
 * c-pr.es
 *
 * Originally for http://www.thedreamfly.org
 */


jQuery(document).ready(function ($) {
  
  var glxy_site = 'http://andvida.shopify.com';

  var GlxyParallax = {
    
    enableScroll: function (options) {
      // Cache the Window object
      $window = $(window);

      $('div[data-type="' + options.dtype + '"]').each(function () {
        var $bgobj = $(this); // assigning the object

        $window.scroll(function () {

            /* Scroll the background at var speed
        the yPos is a negative value because we're scrolling it UP! */
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position
            var coords = options.speed + '% ' + yPos + 'px';

            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });

        }); // window scroll Ends

      });
      
      resetHeight = function (className, hght) {
        if (this.document.hasClass(className)) {
          yPos = yPos - hght;
        }

      }
    },
    
    // Header uses this
    scrollHere: function (location) {
      if (location) {
        if ($(location).length == 0) { // no element found)
          window.location = glxy_site +'?l='+ location;
        } 
        $('html, body').animate({
            scrollTop: $(location).offset().top
        }, 1000)
      }
    },
    
    setupHeader: function (navigation) {
      for (var elem in navigation) {
        $("a[title='"+ elem +"']").on("click", function() {
          GlxyParallax.scrollHere(navigation[this.title])
        })
      }
    }

    
  };

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
  GlxyParallax.enableScroll({

    // data-type of element
    'dtype': 'background',
    'speed': 50
    
  });
}
  
  headerLinks = {
    'our-dream': '#post-6',
    'our-dreamers': '#post-8',
    'around-the-world': '#post-19',
    'get-involved': '#post-69',
    'our-dream-makers': '#post-64',
    'in-the-news': '#post-51'
  }
  
  GlxyParallax.setupHeader(headerLinks);

});
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
