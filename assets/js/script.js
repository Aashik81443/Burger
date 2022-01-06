$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 4, 
    dots: false,
    prevArrow: false,
    nextArrow: false
    
  });

  $('.ham-wrap'). click (function(){
    $('.header').toggleClass('mobile-menu-open');
});

$(window).on('load', function(){
    var winWidth = $(window).width();
    console.log(winWidth);
    if(winWidth < 1025) {
        $('.submenu > a').on('click', function(){
        $(this).parent().toggleClass('active');
        })
    }
});

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.header').addClass('sticky')
    } else{
        $('.header').removeClass('sticky')
    }
});

  // $(function(){
  //   $('.slider-thumb').slick({
  //     autoplay: true,
  //     vertical: true,
  //     infinite: true,
  //     verticalSwiping: true,
  //     slidesPerRow: 5,
  //     slidesToShow: 5,
  //     asNavFor: '.slider-preview',
  //     focusOnSelect: true,
  //     prevArrow: false,
  //     nextArrow: false,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           vertical: false,
  //         }
  //       },
  //       {
  //         breakpoint: 479,
  //         settings: {
  //           vertical: false,
  //           slidesPerRow: 3,
  //           slidesToShow: 3,
  //         }
  //       },
  //     ]
  //   });
  //   $('.slider-preview').slick({
  //     autoplay: true,
  //     vertical: true,
  //     infinite: true,
  //     slidesPerRow: 1,
  //     slidesToShow: 1,
  //     asNavFor: '.slider-thumb',
  //     arrows: false,
  //     draggable: false,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           vertical: false,
  //           fade: true,
  //         }
  //       },
  //     ]
  //   });
  // });



  /**/

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
        }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      }
    }
    ]
});