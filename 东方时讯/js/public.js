$(document).ready(function() {
	var ress = document.location.href
	/* 截取最后一个斜杠后的内容  */
	var string = ress.substring(ress.lastIndexOf("/") + 1);
	var a = string.split('.')[0];
	console.log(a)
	var length = $('.nav li').length;
	for (var i = 0; i < length; i++) {
		var name = $('.nav li').eq(i).find('a').prop('className')
		if (name === a) {
			$('.center-nav .swiper-slide').eq(i).find('.item').addClass('active');
			$('.nav li').eq(i).addClass('active1');
		}
	}
	$('.right-btn').click(function() {
		if ($('.center-nav').css('display') === 'flex') {
			$('.center-nav').css('display', 'none');
			$('.nav').css('display', 'flex');
			$('.bannerContainer').css('margin-top', '-1.6rem')
		} else {
			$('.center-nav').css('display', 'flex');
			$('.nav').css('display', 'none')
			$('.bannerContainer').css('margin-top', '0')
		}
	})
})