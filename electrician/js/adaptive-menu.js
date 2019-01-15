$(function() {
    
   $('.menuToggle').on('click', function(){
			$('.header-menu').slideToggle(500, function(){
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
		});
		
		$('.submenuToggle').on('click', function(){
			$('.header-submenu').slideToggle(500, function(){
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
		});
    
});