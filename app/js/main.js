$(function(){

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$"


    });

    $('.top-slider__inner').slick({
        dots:true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#D6D6D6",
        ratedFill: "#FFCC00",
        readOnly: true
    });

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

});