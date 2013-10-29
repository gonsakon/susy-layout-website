$(document).ready(function($) {
    $( ".menu-control" ).on( "click", function() {
        $('body').toggleClass('open');

    });
     $(window).resize(function() {

     	if ($(window).width() > 768){
      $('body').removeClass('open');
   }
     })
   
});