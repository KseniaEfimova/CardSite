let headerNav = document.getElementsByClassName("menu-panel")[0];
let headerSlider = document.getElementsByClassName("slider")[0];
//let headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;
let headerNavPosTop = headerSlider.offsetHeight;
let header = document.getElementsByTagName("header")[0];

let headerSliderHeight = headerSlider.offsetHeight;
let headerNavHeight = headerNav.offsetHeight;
let headerHeight = headerSliderHeight + headerNavHeight;

header.style.height = headerHeight + "px";

window.onresize = function () {
    if (window.innerWidth <= 600) {
        $(".menu-panel").find("nav").hide();
    }
    else {
        $(".menu-panel").find("nav").show();
    }

    header.style.height = "";
    headerSliderHeight = headerSlider.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerSliderHeight + headerNavHeight;
    header.style.height = headerHeight + "px";

    //headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;
    headerNavPosTop = headerSliderHeight;

    console.log(headerNavPosTop);
};

window.onscroll = function () {

    if (pageYOffset >= headerNavPosTop) {
        headerNav.classList.add("fixed");
    }
    else {
        headerNav.classList.remove("fixed");
    }

    if (pageYOffset + window.innerHeight > window.innerHeight) {
        $(".btn-top").show();
    }
    else {
        $(".btn-top").hide();
    }

};

$(".btn").click(function (e) {
    e.preventDefault();
    let anchorPos = $($(this).attr("href")).offset();
    pos = 0;

    if (anchorPos !== undefined) {
        pos = anchorPos.top - headerNavHeight + 1;
    }

    $("body").animate({
        scrollTop: pos
    }, 'slow');
});

$(".nav-toggler").off('click');

$(".nav-toggler").click(function (e) {
    $(".menu-panel").find("nav").toggle();
    header.style.height = "";
    headerSliderHeight = headerSlider.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerSliderHeight + headerNavHeight;
    header.style.height = headerHeight + "px";
});