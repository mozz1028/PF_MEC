$(document).ready(function(){

    var slickOpt = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow : ".prev",
        nextArrow : ".next",
        autoPlay : true,
        speed: 1000,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
	    pauseOnHover : true,	
        dots: true
    }

      $('.item_wrap').slick(slickOpt);
              
      

      $("a" ).on("click", function(e){e.preventDefault();});

    })
    