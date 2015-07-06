$(document).ready(function(){
	$(".mobile_menu").click(function(){
		$("nav.site_nav").slideToggle();

	});
	// $("nav.main_nav ul li").click(function(){
	// 	$(".dropdown").slideToggle();
	// });

  $(".ac-container label").click(function(){
    $(this).toggleClass("active");
  });
    
 
});

$(function(){
  var $searchlink = $('#searchtoggl i');
  var $searchbar  = $('#searchbar');
  
  $('li.search').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'searchtoggl') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});


// SLIDESHOW 


// EASIF