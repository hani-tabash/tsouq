$(document).ready(function(){
    var goUp = $('.go_up');
    $(window).scroll(function(){
      // this for icon to go up when scroll
      if($(this).scrollTop() > 80){
        if(goUp.is(":hidden")){
          goUp.fadeIn();
        }
      } else {
        goUp.fadeOut();
      }
    });

    // this for the animation of the icon go up
    goUp.click(function(event){
      event.preventDefault();

      $('html , body').animate({
          scrollTop: 0
      },1000);
    });    
});