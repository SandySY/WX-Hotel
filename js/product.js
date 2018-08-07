$(function() {
    var rqt = GetRequest();
    //滑块对象
    var slider = $('.sliderBox');
    var sliderUl = $('.sliderBox ul');
    var sliderShow = $('.showPage');

    //修改滑块 UI的问题
    sliderUl.css('width', (sliderUl.find('li').length * 5.5) + 'rem');
    console.log(rqt);

    //滑块点击事件
    sliderUl.onTouchEnd('li', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').scrollTop(sliderShow.find('li').eq($(this).index())[0].offsetTop - $.rem2px(2.1));
        if (rqt.page == sliderShow.find('li').length) {
            sliderUl.scrollLeft(sliderShow.find('li').eq(sliderShow.find('li').length)[0].offsetLeft)
        }
        // sliderShow.find('li').eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
    console.log(document.body)
    document.body.addEventListener('scroll', function(e) {
        console.log(e)
    }, false);
    setTimeout(function() {
        sliderUl.find('li').eq(rqt.page || 0).onTouchEnd();
    }, 200);


});