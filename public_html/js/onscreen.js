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
    
    
    $(window.document).ready(function(){
        $('div:onscreen, div:passedscroll').css({
                'background' : 'red',
                'opacity': '1',
                '-webkit-transform': 'translate3d(0,0,0)'
            });
        $window.on('scroll', function(){
            $('div:onscreen, div:passedscroll').css({
                'background' : 'red',
                'opacity': '1',
                '-webkit-transform': 'translate3d(0,0,0)'
            }); 
            
            $('div:hiddeninbottom').css({
                'background' : 'blue',
                'opacity': '0.2',
                '-webkit-transform': 'translate3d(0,50px,0)'
            });
        });
    });
}(this, jQuery));