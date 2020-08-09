$(document).ready(function () {
    $(".building-slider-js").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".company-photos-slider-js").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    autoplay: true,
                    arrows: false
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".partner-slider-js").slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $(".event-slider-js").slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });
});

$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })
    ;
});