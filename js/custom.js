$(document).ready(function(){
  $('.slick-carousel').slick({
    dots: false,
    rows: 3,
    slidesPerRow: 1,
    prevArrow: "<i class='slick-prev pull-left fas fa-angle-left' aria-hidden='true'></i>",
    nextArrow: "<i class=' slick-next pull-right fas fa-angle-right' aria-hidden='true'></i>",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesPerRow: 1,
                rows: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesPerRow: 2,
                rows: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesPerRow: 3,
                rows: 2
            }
        }
    ]
});
});