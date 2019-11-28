// 营业执照点击显示
$('.license').click(function() {
	$('.imgzoom_pack').css('display', 'block')
	jzgd()
})
$('.imgzoom_x,.imgzoom_pack').click(function() {
	$('.imgzoom_pack').css('display', 'none')
	yxhd()
})

function jzgd() {
	document.body.style.overflow = "hidden";
	document.querySelector("html").style.overflow = "hidden";
}

function yxhd() {
	// 需有一个隐藏滚动条,否则会同时显示两个滚动条
	document.body.style.overflow = "hidden";
	document.querySelector("html").style.overflow = "auto";
}
// 点击返回按钮
$('.back').click(function() {
	$(window).attr('location', 'index.html');
})
