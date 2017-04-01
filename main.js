let headerNav = document.getElementsByClassName("menu-panel")[0];
let headerSlider = document.getElementsByClassName("slider")[0];
let headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;
let header = document.getElementsByTagName("header")[0];

let headerSliderHeight = headerSlider.offsetHeight;
let headerNavHeight = headerNav.offsetHeight;
let headerHeight = headerSliderHeight + headerNavHeight;

header.style.height = headerHeight + "px";

window.onresize = function () {
    header.style.height = "";
    headerSliderHeight = headerSlider.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerSliderHeight + headerNavHeight;
    header.style.height = headerHeight + "px";

    headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;

    if (window.innerWidth < 599) {
        $(".menu-panel").find("nav").hide();
    }
    else {
        $(".menu-panel").find("nav").show();
    }

};

window.onscroll = function () {

    if (pageYOffset >= headerNavPosTop) {
        headerNav.classList.add("fixed");
    }
    else {
        headerNav.classList.remove("fixed");
    }

};

$("header").find(".btn-info").click(function (e) {
    e.preventDefault();
    let anchorPos = $($(this).attr("href")).offset();
    $("body").animate({
        scrollTop: anchorPos.top - headerNavHeight + 1
    }, 'slow');
})

$(".nav-toggler").click(function (e) {
    $(".menu-panel").find("nav").toggle();
    header.style.height = "";
    headerSliderHeight = headerSlider.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerSliderHeight + headerNavHeight;
    header.style.height = headerHeight + "px";
})