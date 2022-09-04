// ** FADE IN FUNCTION ** //
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0.1) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

window.addEventListener("load", function () {
    let SpecialistSwiper = document.querySelector(".specialist__wrapper");
    if (SpecialistSwiper !== null) {
        var swiperSpecialist = new Swiper(SpecialistSwiper, {
            loop: true,
            spaceBetween: 15,
            navigation: {
                nextEl: ".specialist-arrows__next",
                prevEl: ".specialist-arrows__prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            },
        });
    }

    let GallerySwiper = document.querySelector(".gallery__wrapper");
    if (GallerySwiper !== null) {
        var swiperGallery = new Swiper(GallerySwiper, {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: ".gallery-paginations",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            },
        });
    }

    let ReviewListSwiper = document.querySelector(".review-list__wrapper");
    if (ReviewListSwiper !== null) {
        var swiperReviewList = new Swiper(ReviewListSwiper, {
            loop: true,
            spaceBetween: 35,
            breakpoints: {
                900: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                }
            },
        });
    }

    let BannerSwiper = document.querySelector(".banner__wrapper");
    if (BannerSwiper !== null) {
        var swiperBanner = new Swiper(BannerSwiper, {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: ".banner-wrapper__arrow",
            },
        });
    }
});

/* form */
window.addEventListener("load", function () {
    let Fade = document.querySelector(".overlay");
    let Modal = document.querySelector(".form-l");
    let ModalClose = document.querySelector(".form-l__close");
    let btnOpen = document.querySelector(".call-open-modal");
    let btnOpen2 = document.querySelector(".call-open-modal2");

    if (btnOpen !== null) {
        btnOpen.addEventListener("click", function (e) {
            fadeIn(Fade);
            fadeIn(Modal);
        });
    }

    if (btnOpen2 !== null) {
        btnOpen2.addEventListener("click", function (e) {
            fadeIn(Fade);
            fadeIn(Modal);
        });
    }

    if (ModalClose !== null) {
        ModalClose.addEventListener("click", function (e) {
            fadeOut(Fade);
            fadeOut(Modal);
        });
    }

    if (Fade !== null) {
        Fade.addEventListener("click", function (e) {
            fadeOut(Fade);
            fadeOut(Modal);
        });
    }
});
/* end form */

jQuery("#form-container-input__same").mask("+7 (999) 99-99-999");
jQuery("#form-question-fiels__input--phone").mask("+7 (999) 99-99-999");
jQuery("#form-question-fiels__input--phone2").mask("+7 (999) 99-99-999");


jQuery(".faq-item").on("click", function (){
    if(jQuery(this).hasClass("faq-item--active")){
        jQuery(this).find(".faq-item__text").hide(250);
        jQuery(this).removeClass("faq-item--active");
    } else {
        jQuery(this).find(".faq-item__text").show(250);
        jQuery(this).addClass("faq-item--active");
    }
});

jQuery(".content__btn").on("click", function (){
   jQuery(".content__text--next").show(250);
   jQuery(this).fadeOut(250);
});

jQuery(".header-bottom__close-mobile").on("click", function (){
    jQuery(".header-bottom").hide();
});

jQuery(".header-middle-flex__burger").on("click", function (){
    jQuery(".header-bottom").show();
})
