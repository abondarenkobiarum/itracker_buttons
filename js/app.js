$(document).ready(function(){

    $('.tabs li button').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs li button').removeClass('active');
        $('.tabs-content__element').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

});