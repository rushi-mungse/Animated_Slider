$(document).ready(function () {
    $(".slider").slick({
        autoplay: true,
        fade: true,
        autoplaySpeed: "5000",
        dots: true,
        appendDots: ".slider-dots",
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
    });
});
