/**
* Toggle the clicke <li> element, and display the relevant <ul> menu by getting the .active
* Remove the .active class to all other <li>, might they have been active first.
* 
* @return void
*/

$('li[class*="top-level"]').each(function(index) {
    
    $(this).click(function() {
    
        $('li[class*="top-level"]').each(function(indexBis) {
           $(this).toggleClass('active'); 
        });
        
        $('li[class*="top-level"]').not($(this)).each(function(index) {
            $(this).removeClass('active'); 
        }); 
    
    });
});
