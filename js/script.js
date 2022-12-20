$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(function(){
    let menuTop=$('.CustomNav').offset().top;

    $(window).on('scroll',function(){


        let scrollToTop=$(window).scrollTop();
        
        if(scrollToTop>menuTop){
          $('.CustomNav').addClass("menufix");
        }else{
          $('.CustomNav').removeClass("menufix");
        }
        
        
        });

});
