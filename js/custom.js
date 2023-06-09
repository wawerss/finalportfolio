$(document).ready(function(){
  $('.slick-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<i class='slick-prev pull-left fas fa-angle-left' aria-hidden='true'></i>",
        nextArrow: "<i class=' slick-next pull-right fas fa-angle-right' aria-hidden='true'></i>",
        dots: false,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

});

$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

next_fs.show();
current_fs.animate({opacity: 0}, {
step: function(now) {
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});