
function supressCell() {
    $('.team_cell > span').each(function() {
      if (jQuery.trim ($(this).text()) == "") $(this).prev().addClass('empty_number');
    });
}





jQuery(document).ready(function() {
  supressCell();

  // Refills Navigation
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

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

  jQuery("li.nav-link:not(:last-child)").after("<li class='nav-link'>|</li>");

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
    $('.imageBlock:visible').slideUp('slow');
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




