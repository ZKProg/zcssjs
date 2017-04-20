/** Menu animation manager **/
var MenuManager = function() {
        
    this.stop = function () {
        $('li[class*="clickable"]').find('.sub-menu').each(function(index) {
            $(this).stop().css('display', 'none');
        })
    }
}


/** Events manager **/
$(document).ready(function() {
   
    menuManager = new MenuManager();
    
    $('li[class*="clickable"]').each(function(index) {
        
        $(this).mouseenter(function() {
            menuManager.stop();
            $(this).css('background-color', 'aliceblue').
                                               addClass('active').
                                               find('a').
                                               css('color', 'black');
            $(this).find('.sub-menu').
                           delay(300).
                           fadeIn(300);
            
            var pattern = /clickable-(\d)/;
            var result = pattern.exec($(this).attr('class'));
            
            if (result[1] == 2) $(this).find('.sub-menu').css('left', '-100');
            if (result[1] == 3) $(this).find('.sub-menu').css('left', '-150');
            if (result[1] == 4) $(this).find('.sub-menu').css('left', '-200');
            if (result[1] == 5) $(this).find('.sub-menu').css('left', '-250');
            
        });
        
        $(this).mouseleave(function() {
            menuManager.stop();
            $(this).css('background-color', '#0066ff').
                                               removeClass('active').
                                               find('a').
                                               css('color', 'white');
            
            $(this).find('.sub-menu').fadeOut(300);
        });
    });
    
});
