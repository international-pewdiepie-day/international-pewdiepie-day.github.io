'use strict';
// TODO: put more stuff into config, if we are gonna use config

document.addEventListener('scroll', () => {
    let scroll_pos = $(this).scrollTop();
    if(scroll_pos >= $('#switching-point').offset().top)
        $('.sticky-social').css({'flex-direction': 'column', 'bottom': '25%'});
    else
        $('.sticky-social').css({'flex-direction': 'row', 'bottom': '0%'});
});

(function () {
    const config = $.getJSON("./js/config.json", (json) => {
        console.log(json);
    });

    $(document).ready(() => {
        getSubCount();
        countdown();
    });

    function getSubCount() {
        let requestURL = "https://bastet.socialblade.com/youtube/lookup?query=UC-lHJZR3Gqxm24_Vd_AJ5Yw";
        $.ajax({
            method: "GET",
            url: requestURL
        }).done((value) => {
            $('.subcountLeft').html(value);
        });

        setInterval(getSubCount, 10000);
    }

    function countdown() {
        // TO-DO: April 28 Countdown
        // #de003d

        let eventDate = new Date("Apr 29, 2019");
        let time_remaining = eventDate - new Date();

        $('.days_left').html(Math.floor(time_remaining / (1000 * 60 * 60 * 24)));
        $('.hours_left').html(Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        $('.minutes_left').html(Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60)));
        $('.seconds_left').html(Math.floor((time_remaining % (1000 * 60)) / 1000));

        setInterval(countdown, 1000);
    }
})();
