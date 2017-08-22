let headerNav = document.getElementsByClassName("menu-panel")[0];
let headerImage = document.getElementsByClassName("header-image")[0];
//let headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;
let headerNavPosTop = headerImage.offsetHeight;
let header = document.getElementsByTagName("header")[0];

let headerImageHeight = headerImage.offsetHeight;
let headerNavHeight = headerNav.offsetHeight;
let headerHeight = headerImageHeight + headerNavHeight;

header.style.height = headerHeight + "px";

window.onresize = function () {
    if (window.innerWidth <= 640) {
        //$(".menu-panel").find("nav").hide();
    }
    else {
        //$(".menu-panel").find("nav").show();
    }

    header.style.height = "";
    headerImageHeight = headerImage.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerImageHeight + headerNavHeight;
    header.style.height = headerHeight + "px";

    //headerNavPosTop = headerNav.getBoundingClientRect().top + pageYOffset;
    headerNavPosTop = headerImageHeight;

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

$(".logo-container").click(function (e) {
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
    headerImageHeight = headerImage.offsetHeight;
    headerNavHeight = headerNav.offsetHeight;
    headerHeight = headerImageHeight + headerNavHeight;
    header.style.height = headerHeight + "px";
});