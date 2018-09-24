$(document).ready(function () {
    
    $('.bar').click(function () {
        if ($(window).width() > 1293) {
            $('#side-menu').toggle();  //التبيديل التلقائي بين حالتي العرض والإخفاء

            //  في حال كانت القائمة الجانبية مخفية .. عندئذٍ زيادة عرض الفقرة الرئيسية وإخفاء أسهم التنقل
            if (!$('#side-menu').is(':visible')) {
                
                $('.main-content').css({ 'margin-right': 'auto', 'width': '100%' });
                $('.carousel .arrow.left').hide();
                $('.channel-info').css({ 'width': 'auto' });
                $('.sub-menu').css({ 'width': 'auto' });
                $('.channel-videos').css({ 'width': '98%', 'max-width': '1320px' });
            }
            else {
                //  عند إظهار القائمة الجانبية .. قم بإعادة تصغير الفقرة الرئيسية وإظهار أسهم التنقل
                $('.main-content').css({ 'margin-right': '240px', 'width': 'calc(100% - 240px)' });
                $('.carousel .arrow.left').show();
                $('.channel-info').css({ 'width': '63vw' });
                $('.sub-menu').css({ 'width': '63vw' });
                $('.channel-videos').css({ 'width': '855px' });
            }
        }
        else  {
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
        }
    });

    //إظهار حقل البحث عند النقر على أيقونة البحث
    $('.sub-menu .search i').click(function () {
        $('.sub-menu .search .search-field').animate({ width: 'toggle' });
    });

    //إخفاء حقل البحث عند النقر خارجه
    $(document).mouseup(function (e) {
        var container = $(".sub-menu .search .search-field");
        if (!container.is(e.target))
            container.hide();
    });
});

function moveMenu(direction)  {
    var step = 50;
    var target = $('.sub-menu ul');
    var right = parseInt($(target).css("right"));
    var visibleWidth = $('.sub-menu').width();

    if (direction == "left") {
        right -= step;
        if ((right * -1) <= (visibleWidth)) {
            right += 'px';
            $(target).css({ 'right': right });
        }
    }
    else {
        right += step;
        if (right <= 0) {
            right += 'px';
            $(target).css({ 'right': right });
        }
    }
}