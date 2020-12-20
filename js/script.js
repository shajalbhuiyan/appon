//sticky and btop start


$(window).scroll(function(){
  $scrollamout = $(window).scrollTop();
  
  if($scrollamout > 700){
    $(".main-menu").addClass("sticky")
  }else{
    $(".main-menu").removeClass("sticky")
  }

  if($scrollamout > 1000){
    $(".btop").fadeIn()
  }else{
    $(".btop").fadeOut()
  }
})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})


//sticky and btop end















//banner slider start

$('#banner-part').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//banner slider end


//screenshot slider start

$('#screenshot-part .row').slick({
    dots: true,
    infinite: true,
    autoplay:false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//screenshot slider end


//venobox start

$(document).ready(function(){
  $('.venobox').venobox(); 
});

//venobox end

//team part start


$('#team-part .row').slick({
  dots: false,
  infinite: true,
  autoplay:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
     
        
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//team part end







//testipart slider start



$('#testimonial-part .box').slick({
  dots: false,
  infinite: true,
  autoplay:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  centerMode: true,
  asNavFor: '#testimonial-part .bottom',
  fade:true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#testimonial-part .bottom').slick({
  dots: true,
  infinite: true,
  autoplay:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  centerMode: true,
  asNavFor: '#testimonial-part .box',
  
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



//testipart slider end