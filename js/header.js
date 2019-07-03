
$(".m,.all").mouseenter(function(){
	$(this).children("div:last-child").stop().slideDown(500);
	$(this).siblings().show()
})
$(".m,.all").mouseleave(function(){
	$(this).children("div:last-child").stop().slideUp(500);
})
$(".child>.container>ul>li").mouseenter(function(){
	$(".child>.container>ul>li>.children").hide();
	$(this).children("div:last-child").show();
})
//购物车
$(".topbar-cart").mouseover(function(){
	$(this).children("a").css({
		"background":"#fff",
		"color":"#ff6700 ",		
	})
	$(this).children("div").stop().slideDown();	
})

$(".topbar-cart").mouseout(function(){
	$(this).children("a").css({
		"background":"#ff6700",
		"color":"#fff ",		
	})
	$(this).children("div").stop().slideUp();	
})

//下载app
//console.log($(".topbar .container>ul>li:eq(10)"))
$(".topbar .container>ul>li:eq(10)").mouseover(function(){
	$(this).children("div").stop().show();
})
$(".topbar .container>ul>li:eq(10)").mouseout(function(){
	$(this).children("div").stop().hide();
})

