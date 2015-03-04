var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

$showHide.on('click', function () {
    $box.toggleClass('js-box-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-box-move-inout');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-box-collapse');
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});

$circle.on('webktiAnimationEnd animationend', function () {
    $circle.removeClass('js-circle-bounce');
});