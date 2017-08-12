// SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  });
});

// SmartMenus mobile menu toggle button
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});
//]]> 
$(function() {
	var p = $("#blognav").offset();
	var center = p.left + $("#blognav").width() / 2;
 	var width = $("#blogimg").width();
	var imgLeft = center - width / 2;
	var imgTop = p.top + $("#blognav").height();
	$("#blogimg").offset({left: imgLeft, top: imgTop});
	var timer;
	$("#blognav, #blogimg").mouseleave( function(){
		timer = setTimeout(function() {
			$("#blogimg").css({"opacity":"0","visibility": "hidden"});
		}, 50);
	}).mouseenter( function() {
		clearTimeout(timer);
		$("#blogimg").css("opacity","1").css("visibility", "visible");
	})
});
