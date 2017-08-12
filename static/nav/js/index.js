$(function() {
  	$('.scroll').on('click', function(e) {
    	e.preventDefault();
    	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  	});
 	$( window ).scroll(function() {
    	clearTimeout( $.data( this, "scrollCheck" ) );
    	$.data( this, "scrollCheck", setTimeout(function() {
    		var cur = $("body").scrollTop();
    		var height = $("body").height();
    		var section = Math.floor(cur / height + 0.5 + 1);
    		$('html, body').animate({ scrollTop: $("#section0"+section).offset().top}, 500, 'linear');
    	}, 500) );
   	});
});