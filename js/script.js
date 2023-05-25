// slick slider (.da_music여기에 너비 지정 x => .slick 알아서 잡음)
$(".da_music").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  // slick slider
  $(".al_music").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

 
// 우측슬라이드 메뉴
const menuIcon = document.querySelector('.menu');
const slideMenu = document.querySelector('.slide-menu');

menuIcon.addEventListener('click', function() {
  slideMenu.classList.toggle('open');
});

