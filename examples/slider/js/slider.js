var motionManager = {
    
    animateSteps: 0,
    interval: null,
    tempo: 4000,
    url1: '/slide1',
    url2: '/slide2',
    url3: '/slide3',
    
    init: function() {
        $('#text-slide').html($('#text-holder-slide1').text());
        motionManager.interval = setInterval(motionManager.animateSlider, motionManager.tempo)  
        motionManager.initEventsHandler();
    },
    
    animateSlider: function() {
        
        motionManager.animateSteps++;
        
        if ((motionManager.animateSteps%3) != 0) {
            $('#images').animate({
                top: '-=330px'
            }, 900, 'swing');
        }   else {
            $('#images').animate({
                top: '0px'
            }, 900, 'swing');
        }

            
        if(motionManager.animateSteps % 3 === 1) {
            document.getElementsByClassName('slider-right-title')[0].classList.remove('right-title-active');
            document.getElementsByClassName('slider-right-title')[1].classList.add('right-title-active');
            $('#text-slide').html($('#text-holder-slide2').text());
        }
        if(motionManager.animateSteps % 3 === 2) {
            document.getElementsByClassName('slider-right-title')[1].classList.remove('right-title-active');
            document.getElementsByClassName('slider-right-title')[2].classList.add('right-title-active');
            $('#text-slide').html($('#text-holder-slide3').text());
        }
        if(motionManager.animateSteps % 3 === 0) {
            document.getElementsByClassName('slider-right-title')[2].classList.remove('right-title-active');
            document.getElementsByClassName('slider-right-title')[0].classList.add('right-title-active');
            $('#text-slide').html($('#text-holder-slide1').text());
        }

    },
    
    initEventsHandler : function() {
        
        $('.slider-right-title').each(function(index) {
            // MOUSE ENTER
            $(this).mouseenter(function() {
                
                $('.slider-right-title').each(function(index) {
                    $(this).removeClass('right-title-active');   
                });
                                              
                $(this).addClass('right-title-active');
                
                if(index === 0) {
                    $('#images').css('top', 0);
                    $('#text-slide').html($('#text-holder-slide1').text());
                }
                
                if(index === 1) {
                    $('#images').css('top', -330);
                    $('#text-slide').html($('#text-holder-slide2').text());
                }
                
                if(index === 2) {
                    $('#images').css('top', -660);
                    $('#text-slide').html($('#text-holder-slide3').text());
                }

                clearInterval(motionManager.interval);
            });     
            
            // MOUSE LEAVE
            $(this).mouseleave(function() {
                if (index === 0) motionManager.animateSteps = 0;    
                if (index === 1) motionManager.animateSteps = 1;
                if (index === 2) motionManager.animateSteps = 2;
                motionManager.interval = setInterval(motionManager.animateSlider, motionManager.tempo)  
            });
            
            $(this).click(function() {
                if (index === 0) document.location = motionManager.url1;    
                if (index === 1) document.location = motionManager.url2; 
                if (index === 2) document.location = motionManager.url3; 
            })
            
        }); 
    }
}

$(document).ready(function () {
    
    motionManager.init();
    
});