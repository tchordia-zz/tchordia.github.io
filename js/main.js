(function($) {

	"use strict";	

  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });
	// $('.orclick').click(function(e){
//         
//         								alert("clicked");
//         								console.log("clicked");
//    										 $('.slideDown').slideToggle();
// 											});
											
	$(".preloader").delay(1000).fadeOut("slow")
	
	

})(jQuery);

$(".preloader").delay(1000).fadeOut("slow")




