"use strict";
$(document).ready(function () {
    let started = false;
    $('#start')
    .on('mouseenter', function () {
        if (!$(".boundary").first().hasClass('youlose')) {
            started = true;
        }
    }).click(function () {
        if ($(".boundary").first().hasClass('youlose')) {
            $('.boundary').toggleClass('youlose');
        }
        started = true;
    });

    $('.boundary').on('mouseenter', function () {
        loseCallback();
    });
    $('#maze').on('mouseleave', function () {
        loseCallback();
    });

    $('#end').on('mouseenter', function () {
        if (started) {
            alert("You win! :)")
            started = false;
        }
    });
    function loseCallback(){
        if (started) {
            $('.boundary').toggleClass('youlose');
            started = false;
            setTimeout(function () {
                alert("Sorry, you lose :(");
            }, 100);
        }
    }
});