function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function () {

    $('.value').on('appear', function () {
        // this element is now inside browser viewport
        console.log('dfssffddfs');
    });

})

$(window).scroll(function () {
    $('.animation-fadeUp').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__animated animate__fadeInUp');
        }
    });
    $('.line').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__animated animate__fadeInUp');
        }
    });

    $('.slide-in').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__animated animate__slideInLeft');
        }
    });

});

var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc() {
    for (let i = 0; i < count.length; i++) {
        inc.push(1);
        if (inc[i] != count[i].getAttribute("max-data")) {
            inc[i]++;
        }
        count[i].innerHTML = inc[i];
    }
}


var main = document.getElementById("main");
window.onscroll = function () {
    var timer = setInterval(() => {
        var topElm = main.offsetTop;
        var btmElm = main.offsetTop + main.clientHeight;
        var top_screen = window.pageYOffset;
        var bottom_screen = window.pageYOffset + window.innerHeight;
        if ((bottom_screen > topElm) && (top_screen < btmElm)) {
            intervalFunc();
        } else {
            clearInterval(timer);
        }
    }, 500)
};