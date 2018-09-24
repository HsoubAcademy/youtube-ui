$(document).ready(function() {
    
    $('#add-video-icon > i').click(function(){
        $('.popup').hide();
        $('.layer').show();
        $('#add-video-list').toggle();
    });

    $('#apps-icon > i').click(function(){
        $('.popup').hide();
        $('.layer').show();
        $('#apps-list').toggle();
    });

    $('#setting-icon > i').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#setting-list').toggle();
    });
    
    $('#colors-link').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#colors').toggle();
    });

    $('#colors .colors-back').click(function () {
        $('#colors').hide();
        $('.layer').show();
        $('#setting-list').show();
    });

    $('#languages-link').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#languages').toggle();
    });

    $('#languages .languages-back').click(function () {
        $('#languages').hide();
        $('.layer').show();
        $('#setting-list').show();
    });

    $('#locations-link').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#locations').toggle();
    });

    $('#locations .locations-back').click(function () {
        $('#locations').hide();
        $('.layer').show();
        $('#setting-list').show();
    });

    $('#restriction-link').click(function () {
        $('.popup').hide();
        $('.layer').show();
        $('#restriction').toggle();
    });

    $('#restriction .restriction-back').click(function () {
        $('#restriction').hide();
        $('.layer').show();
        $('#setting-list').show();
    });

    $('.layer').click(function(){
        $('.popup').hide();
        $('.layer').hide();
    });

    /*مظهر الألوان الداكنة*/
    $('#colors input[type=checkbox]').change(function () {
        if (this.checked)
            $('#colors-value').text('مفعل');
        else
            $('#colors-value').text('متوقف');
    });

    /*تغيير اللغة*/
    $('#languages .card-body ul li a').click(function () {
        $('#languages-value').text($(this).text());
        $('#languages').hide();
        $('.layer').show();
        $('#setting-list').show();
    });

    // إغلاق القائمة الجانبية عند النقر على الطبقة السوداء
    $('.black-layer').click(function () {
        $('#side-menu').css({ 'right': '-240px' });
        $('.black-layer').hide();
    });

    /*إظهار حقل البحث في القائمة العلوية (أجهزة صغيرة الحجم)ه*/
    $('#search-icon').click(function(){
        $('#top-menu .right').hide();
        $('#top-menu .options').hide();
        $('#top-menu .search').show();
        $('#top-menu #search-back').show();
        $('#top-menu .search').addClass('search-on-small');
    });
    $('#search-back').click(function () {
        $('#top-menu .right').show();
        $('#top-menu .options').show();
        $('#top-menu .search').hide();
        $('#top-menu #search-back').hide();
        $('#top-menu .search').removeClass('search-on-small');
    });


});  

function slider(element, direction) {
    var step = 214;
    var target = $(element).siblings('.slide-container').children('.slide');
    var right = parseInt($(target).css("right"));
    var visibleWidth = $('.carousel').width();

    if (direction == "left") {
        right -= step;

        if ((right * -1) <= (214 * 6 - visibleWidth)) {
            right += 'px';
            $(target).css({ 'right': right });
            $(element).siblings('.arrow').css({ 'display': 'block' });
        }

        if ((parseInt(right) * -1) >= (214 * 5 - visibleWidth)) {
            $(element).css({ 'display': 'none' });
        }
    }
    else {
        right += step;

        if (right <= 0) {
            right += 'px';
            $(target).css({ 'right': right });
            $(element).siblings('.arrow').css({ 'display': 'block' });
        }

        if (parseInt(right) >= 0)
        $(element).css({ 'display': 'none' });
    }
}