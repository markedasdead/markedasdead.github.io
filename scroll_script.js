var didScroll;
var lastScrollTop = 0;
var delta = 20;
var header = $("#header"); 
var navbarHeight = header.outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 200);

function hasScrolled() {
    var st = $(window).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        header.removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            header.removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
