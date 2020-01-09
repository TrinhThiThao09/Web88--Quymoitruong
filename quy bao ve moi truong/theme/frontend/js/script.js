$('.home_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-left" aria-hidden="true"></i></button>'
});
$('.library_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  responsive: [
  {
    breakpoint: 1126,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint:540,
    settings:{
      slidesToShow: 1
    }
  }
  ]
});
$('.online_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000
});
$('.img_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
$( document ).ready(function() {
  var html=$('html');
  var body=$('body');
  var m_nav=$('.menu-mb');
  var m_nav_btn=$('.menu-btn .btn-bar');
  var nav=m_nav.children('ul');
  m_nav.find("ul li").each(function(){
    if($(this).find("ul li").length > 0){
      $(this).prepend('<i></i>');
    }
  });
  m_nav_btn.click(function(e){
   e.stopPropagation();
   if(m_nav.is(':hidden')){
    $(this).addClass('active');
    m_nav.slideDown(200);
  }
  else{
    m_nav.slideUp(200);
    $(this).removeClass('active');
    m_nav.slideUp();
    m_nav.find('li ul').slideUp();
    m_nav.find('li>i').removeClass('active');
  }
});
  m_nav.find("li i").click(function(e){
   e.stopPropagation();
   var ul=$(this).nextAll("ul");
   if(ul.is(':hidden')===true){
    $(this).addClass('active');
    ul.slideDown(200);
  }
  else{
    ul.slideUp(200);
    $(this).removeClass('active');
  }
});
  win.click(function(e){
    m_nav.slideUp();
    m_nav.find('li ul').slideUp();
    m_nav.find('li>i').removeClass('active');
  });
}); 