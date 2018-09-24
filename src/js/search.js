$(document).ready(function () {
    
    $('.bar').click(function () {
        if ($(window).width() > 1293) {
            $('#side-menu').toggle();  //التبيديل التلقائي بين حالتي العرض والإخفاء

            //  في حال كانت القائمة الجانبية مخفية .. عندئذٍ زيادة عرض الفقرة الرئيسية وإخفاء أسهم التنقل
            if (!$('#side-menu').is(':visible')) {
                
                $('.main-content').css({ 'margin-right': 'auto', 'width': '95%', 'padding': '0px 2%' });
                $('.carousel .arrow.left').hide();

            }
            else {
                //  عند إظهار القائمة الجانبية .. قم بإعادة تصغير الفقرة الرئيسية وإظهار أسهم التنقل
                $('.main-content').css({ 'margin-right': '20%', 'width': '73%', 'padding': '0px' });
                $('.carousel .arrow.left').show();
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

    // فتح وإغلاق فلاتر تصفية البحث
    $("#search-filters-icon").click(function () {
        $("#search-filters").slideToggle("slow");
    });
});