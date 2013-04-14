(function(window, $, undefined){
    var $window = $(window),
        windowHeight = $window.height();
        
    // creo que sera necesario para que funcione bien en moviles and shit
    $window.on('orientationchange.onscreen resize.onscreen', function(){  windowHeight = $window.height(); });
    
    $.expr[':'].onscreen = function( elem ){ // function(elem, index, match)
        var itemOffsetTop = $(elem).offset().top,
            scrollTop = $window.scrollTop();
            
        return ( itemOffsetTop > scrollTop ) && ( itemOffsetTop < (scrollTop + windowHeight) );
    };
    $.expr[':'].passedscroll = function( elem ){
        var itemOffsetTop = $(elem).offset().top,
            scrollTop = $window.scrollTop();
            
        return itemOffsetTop < scrollTop;
    };
    $.expr[':'].hiddeninbottom = function( elem ){
        var itemOffsetTop = $(elem).offset().top,
            scrollTop = $window.scrollTop();
            
        return itemOffsetTop > (scrollTop + windowHeight);
    };
}(this, jQuery));