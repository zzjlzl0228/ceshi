function fenye(result, list, listCon) {
	$.getJSON(result, function(data) {
		// 获取到html文件中的所有标签
		var $jsontip = $(list);
		// var strHtml = ""; //存储数据的变量
		var length = data.length;
		// 每页显示的li数
		var num = 10;
		// 多余的li数
		var num1 = length % num;
		if (num1 != 0) {
			page = Math.floor(length / num) + 1;
		} else {
			page = Math.floor(length / num)
		}

		//第一页显示时，从json数组内 截取10个
		var pageOne = data.slice(0, num);
		// console.log(pageOne)
		// 设置当前页(默认为0)
		var currentPage = 0;
		show(pageOne, listCon)
		$('.prev').hide()
		$('.next').click(function() {
			$('.prev').show()
			currentPage++;
			for (var i = 0; i < page; i++) {
				var pageNumber = data.slice(i * num, (i + 1) * num);
				if (i == currentPage) {
					show(pageNumber, listCon)
					// 当点击下一页时将滚动条得垂直位置变为0
					$(window).scrollTop(0);
				}
			}
			if (currentPage > 0) {
				$('.prev').css('background', 'rgba(211,20,28,1)');
				$('.prev').css('color', 'white');
			}
			if (currentPage >= (page - 1)) {
				// $('#nextPage').css('cursor', 'not-allowed');
				$('.next').hide()
			} else {
				$('.next').show()
			}
		})

		$('.prev').click(function() {
			$('.next').show()
			currentPage--;

			for (var i = 0; i < page; i++) {
				var pageNumber = data.slice(i * num, (i + 1) * num);
				if (i == currentPage) {
					show(pageNumber, listCon)

					$(window).scrollTop(0);
				}
			}

			if (currentPage < (page - 1)) {

				$('.next').css('background', 'rgba(211,20,28,1)');
				$('.next').css('color', 'white');
			}

			if (currentPage <= 0) {
				$('.prev').hide()
			} else {
				$('.prev').show()
			}
		})
		//  遍历获取到的json数据,并将内容填到相应位置进行显示
		function show(pageNum, listCon) {
			$.each(pageNum, function(infoIndex, info) {
				var $cell = listCon.clone()
				if (infoIndex == 0) {
					$jsontip.empty()
				}
				$cell.find('.left img').attr('src', info.url)
				$cell.find('.title').text(info.title)
				$cell.find('.description').text(info.description)
				$cell.find('.brand').text(info.title)
				$cell.find('.date').text(info.date)
				$jsontip.append($cell)
			})
		}
	})
}
// 轮播图
var swiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: true,
})
$('.back').click(function() {
	$(window).attr('location', 'index.html')
})
// 置顶按钮
function backTop(id) {
	$(window).scroll(function() {
		var height = Math.abs($(this).scrollTop());
		if (height > 150) {
			$(id).fadeIn()
		}
		if (height < 150) {
			$(id).fadeOut()
		}
	})
	$(id).click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 100);
	})
}



