var swiper;

function showImg () {
    $('#swiper-close').show();
    $('#swiper-box').show(function () {
        initSwiper();
        if (!$('#swiper-box').hasClass('show')) {
            $('#swiper-box').addClass('show');
        }
    });
}

function hideImg () {
    $('#swiper-close').hide();
    $('#swiper-box').removeClass('show');
    $('#swiper-box').hide();
}

function initSwiper () {
    if (swiper) {
        return;
    }
    swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true
    });
}

$('#show').click(function () {
    showImgs([
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494052552278&di=ef604cecf5413490b60b6e1a795f5114&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201411%2F18%2F20141118193632_aXQXB.jpeg',
        'https://f12.baidu.com/it/u=2873946516,3159127615&fm=72'
    ]);
});

$('#swiper-close').click(function () {
    hideImg();
})

function showImgs (imgs) {

}