$(document).ready(function(){
    $('.header-toggle').click(function(){
        $('.header-wrapper').toggleClass('header-wrapper_active')
        $('.header-toggle__item').toggleClass('header-toggle__item_active')
    })
    $('[data-toggle="tooltip"]').tooltip();
})