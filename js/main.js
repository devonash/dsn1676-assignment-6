var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

$showHide.on('click', function () {
    $box.toggleClass('js-box-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-box-move-inout');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-box-collapse');
});