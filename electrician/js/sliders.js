jQuery(document).ready(function($) {
  $("#header-slider").lightSlider({
        item: 1,
        slideMargin: 0,
        speed: 3000,
        pause: 7000,
        mode: 'fade',
        auto: true,
        loop: true,
        keyPress: true,
        enableDrag: false,
        controls: false,
        freeMove: true
    });
    
      $("#testimon-slider").lightSlider({
        item: 1,
        slideMargin: 0,
        speed: 2000,
        pause: 3000,
        mode: 'fade',
        auto: true,
        loop: true,
        keyPress: true,
        enableDrag: false,
        controls: false,
        freeMove: true
    });
    
});