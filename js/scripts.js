
function supressCell() {
  $('.team_cell > span').each(function() {
    if (jQuery.trim ($(this).text()) == "") $(this).prev().addClass('empty_number');
  });
}

function navPipe() {
  if(Modernizr.mq('only all and (min-width: 800px)')){
    jQuery("li.nav-link:not(:last-child)").after("<li class='nav-link'>|</li>");
  }else if(Modernizr.mq('only all and (max-width: 799px)')){
    jQuery("<li class='nav-link'>|</li>").remove();
  }
}

// function imageCenter() {
//   var imgHeight = jQuery('div.imageBlock img').height();
// }

jQuery(document).ready(function() {
  supressCell();
  navPipe();
  

    var menu = jQuery('#menu-menu-1');
    var menuToggle = jQuery('#js-mobile-menu');
    var signUp = jQuery('.sign-up');

    jQuery(menuToggle).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle(function(){
        if(menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });

  // underline under the active nav item
  jQuery(".nav .nav-link").click(function() {
    jQuery(".nav .nav-link").each(function() {
      jQuery(this).removeClass("active-nav-item");
    });
    jQuery(this).addClass("active-nav-item");
    jQuery(".nav .more").removeClass("active-nav-item");
  });

  

  jQuery(function(){
	  jQuery("#home_rotate").cycle();
  });

}); //End $(document).ready

  
jQuery(document).ready(function($) {
  
  // Project Page Show and Hide

  $("div.imageBlock").each(function() {

    $(this).find('img:first').appendTo($(this).parents('.individual-project').find('.firstImage')); 

  });
  $(".imageBlock").hide();
  $(".more_link").click(function( ) {
     
    $(this).toggleClass('SeeMore2');
    if($(this).hasClass('SeeMore2')){
        $(this).text('{See More}');         
    } else {
        $(this).text('{See Less}');
    }
    // $('.imageBlock:visible').slideUp('slow');
    $(this).parent().find(".imageBlock").slideToggle('slow'); 

  return false;   
  });

  // Contact Page Show and Hide

  $(".contact_form").hide();
  $(".formTrigger").click(function( ) {

    // $('.contact_form:visible').slideUp('slow');
    $(this).parents(".individual-information").find(".contact_form").slideToggle('slow'); 

  return false;   
  });


}); //End $(document).ready


$(window).resize(function() {

});

$(window).load(function() { 

    $("div.imageBlock img").each(function() {
       var $this = $(this);
       // when your referring same img multiple times, grab it in a variable
       var image = $this; 
       var imageWidth =  image.width(); // or image.css("width")
       console.log(imageWidth);
       var imageHeight = image.height(); // or image.css("height")
        if (imageWidth < imageHeight){
           $this.addClass("aW");
        } else if (imageWidth > imageHeight) {
           $this.addClass("aH");
       }
    }); 
}); 

