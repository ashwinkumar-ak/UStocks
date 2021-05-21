$(document).ready(function()
{

    /* Sticky Navbar Starts */
let nav_offset_top = $('.header_area').height() +50;

function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        })
    }
}
navbarFixed();
/* Sticky Navbar Ends */
/* index5 jquery */
$("#flipreliance").click(function(){
    $("#panelreliance").slideToggle("slow");
    });

$("#flipasian").click(function(){
    $("#panelasian").slideToggle("slow");
    });

$("#fliptata").click(function(){
    $("#paneltata").slideToggle("slow");
    });

$("#flipford").click(function(){
    $("#panelford").slideToggle("slow");
    });

$("#flipccl").click(function(){
    $("#panelccl").slideToggle("slow");
    });

$("#flipbajaj").click(function(){
    $("#panelbajaj").slideToggle("slow");
    });
/* index5 jquery ends */




/* index6 jquery */
$(".card-title-one").click(function(){
    $(".card-text-one").slideToggle("slow");
    });

$(".card-title-two").click(function(){
    $(".card-text-two").slideToggle("slow");
    });

$(".card-title-three").click(function(){
    $(".card-text-three").slideToggle("slow");
    });

$(".card-title-four").click(function(){
    $(".card-text-four").slideToggle("slow");
    });

$(".card-title-five").click(function(){
    $(".card-text-five").slideToggle("slow");
    });

$(".card-title-six").click(function(){
    $(".card-text-six").slideToggle("slow");
    });

/* index6 jquery ends */


});
