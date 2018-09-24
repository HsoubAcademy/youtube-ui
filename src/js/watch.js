$(document).ready(function () {
    
    $('.bar').click(function () {
        
        
        var right = $('#side-menu').css("right");
        if (right == '0px')    // القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('#side-menu').css({ 'right': '-240px' });
            $('.black-layer').hide();
        }
        else {   // القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('#side-menu').css({ 'right': '0' });
            $('.black-layer').show();
        }
        
    });

    $('#view-more').click(function () {
        $(this).siblings('.details').css({ 'height': 'auto' });
        $(this).siblings('#view-less').show();
        $(this).hide();
    });

    $('#view-less').click(function () {
        $(this).siblings('.details').css({ 'height': '111px' });
        $(this).siblings('#view-more').show();
        $(this).hide();
    });

    /* ترتيب التعليقات بحسب الأهم أو التاريخ */
    $('.comments-order').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#order-by').toggle();
    });

    /*إظهار الردود على التعليق*/
    $('.show-replies').click(function () {
        $(this).siblings('.all-replies').show();
        $(this).siblings('.hide-replies').show();
        $(this).hide();
    });

    $('.hide-replies').click(function () {
        $(this).siblings('.all-replies').hide();
        $(this).hide();
        $(this).siblings('.show-replies').show();
    });

    /*نقل قسم الفيديوهات التالية إلى قبل قسم التعليقات على الشاشات الأصغر من 1000 بكسل*/
    if ($(window).width() <= 1000) {
        $(".watch-more").insertBefore(".all-comments");
    }
});