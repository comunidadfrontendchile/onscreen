(function(window, $, undefined){
    var $window = $(window),
        windowHeight = $window.height();

    // cache window height for better performance
    $window.on('resize.onscreen', function(){  windowHeight = $window.height(); });
    
    $.expr[':'].onscreen = function( elem ){
        var itemOffsetTop = $(elem).offset().top,
            scrollTop = $window.scrollTop();
        return ( itemOffsetTop > scrollTop ) && ( itemOffsetTop < (scrollTop + windowHeight) );
    };
    $.expr[':'].passedscroll = function( elem ){ 
        return $(elem).offset().top < $window.scrollTop(); 
    };
    $.expr[':'].hiddeninbottom = function( elem ){ 
        return $(elem).offset().top > ($window.scrollTop() + windowHeight); 
    };
}(this, jQuery));