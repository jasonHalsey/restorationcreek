jQuery(document).ready(function() {

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

  // $("<div class='nav-link'>|</div>").append("li.nav-link");
  jQuery("li.nav-link:not(:last-child)").after("<li class='nav-link'>|</li>");

  jQuery(function(){
	  jQuery("#home_rotate").cycle();
  });

  // jQuery('.imageBlock').hide();

  // jQuery('div.imageBlock > img:first').appendTo('.firstImage');

  // jQuery('div.imageBlock > img:first').appendTo().prev('.firstImage');

  // jQuery('.more_link').click(function(e) {
  //   jQuery(this).next('div.imageBlock').slideToggle('slow');
  // });




}); //End $(document).ready

jQuery(document).ready(function($) {
  //$(".imageBlock").hide();
  $(".more_link").click(function() {
    console.log('in the click')
    // $(".imageBlock").hide();
    // $(this).parent().next("article.individual-project > div.imageBlock").show();

    $(this).parent().next("article.individual-project").find(".imageBlock").hide();
  });
});


