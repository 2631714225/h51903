var total_all = $(".accountC>span"); // 总计
var num = $(".accountL>.yx>.yi"); // 已选商品数目容器
var xj = 0 //小计
function total() { //计算总价格
	var moneys = 0;
	for(var i = 1; i < $(".col-money").length; i++) {
		var q = parseFloat($($(".col-money")[i]).html());
		moneys += q
	}	
	total_all.html(moneys);
}
total();
//全选、多选
$(".col>i").click(function() {
	if($(this).attr("class") == "iconfont all") { //全选
		if($(this).css("color") == "rgb(224, 224, 224)") {
			$(".item-sub-box").css("display", "block")
			$(".col>i").html("&#xe6ca;");
			$(".col>i").css({
				"color": "#ff6700"
			})
			total();
			//计算已选商品
			var fir = parseInt($(".num-border>input:eq(0)").val());
			var sed = parseInt($(".num-border>input:eq(1)").val());
			var he = fir + sed;
			$(".accountL>.yx>.yi").html(fir + sed);

			$(".accountR>img,.accountR>p").css("display", "none");
			$(".accountR>a").css({
				"background": "#ff6700  ",
				"color": "#fff",
			})

		} else { //未选中
			$(".item-sub-box").css("display", "none")
			$(".col>i").html("&#xe68c;");
			$(".col>i").css({
				"color": "#e0e0e0"
			})
			total_all.html(0)
			//计算已选商品
			$(".accountL>.yx>.yi").html(0);

			$(".accountR>img,.accountR>p").css("display", "block");
			$(".accountR>a").css({
				"background": "#e0e0e0 ",
				"color": "#b0b0b0",
			})
		}
 //单选		
	} else if($(this).attr("class") == "iconfont check") {
		if($(this).css("color") == "rgb(255, 103, 0)") { //选中
			$(this).parent().parent().next().css("display", "none");
			$(this).html("&#xe68c;");
			$(this).css({
				"color": "#e0e0e0"
			});

			if(($(".check")[0].style.color == "rgb(224, 224, 224)") && ($(".check")[1].style.color == "rgb(224, 224, 224)")) {
				$(".col>i").html("&#xe68c;");
				$(".col>i").css({
					"color": "#e0e0e0"
				});
				$(".accountR>img,.accountR>p").css("display", "block");
				$(".accountR>a").css({
					"background": "#e0e0e0 ",
					"color": "#b0b0b0",
				})

			} else if(($(".check")[0].style.color == "rgb(255, 103, 0)") && ($(".check")[1].style.color == "rgb(255, 103, 0)")) {
				$(".col>i").html("&#xe6ca;");
				$(".col>i").css({
					"color": "#ff6700"
				});
			}
			//计算已选商品
			var input = parseInt(($(this).parent().parent().children()[4].children[0].children[1].value))
			$(".accountL>.yx>.yi").html($(".accountL>.yx>.yi").html() - input)

			//计算总价
			xj = (parseInt($(this).parent().parent().children()[5].innerHTML));			
			total_all.html($(".accountC>span").html() - xj);

		} else { //未选中
			$(this).parent().parent().next().css("display", "block")
			$(this).html("&#xe6ca;");
			$(this).css({
				"color": "#ff6700"
			});
			$(".accountR>img,.accountR>p").css("display", "none");
			$(".accountR>a").css({
				"background": "#ff6700  ",
				"color": "#fff",
			})

			if(($(".check")[0].style.color == "rgb(224, 224, 224)") && ($(".check")[1].style.color == "rgb(224, 224, 224)")) {
				$(".col>i").html("&#xe68c;");
				$(".col>i").css({
					"color": "#e0e0e0"
				});
			} else if(($(".check")[0].style.color == "rgb(255, 103, 0)") && ($(".check")[1].style.color == "rgb(255, 103, 0)")) {
				$(".col>i").html("&#xe6ca;");
				$(".col>i").css({
					"color": "#ff6700"
				});
			}
			//计算已选商品
			var input = parseInt(($(this).parent().parent().children()[4].children[0].children[1].value))
			$(".accountL>.yx>.yi").html(parseInt($(".accountL>.yx>.yi").html()) + input)

			xj = (parseInt($(this).parent().parent().children()[5].innerHTML));
			total_all.html(parseFloat(total_all.html()) + xj);
		}
	}
})

//计算价格
$(".num-border").click(function(e) {
	e = window.event || e;
	var target = e.target || e.srcElement;
	if($(target).html() == "+") {
		var count = parseInt($(target).prev().val());
		count++;
		$(target).prev().val(count);
		var num = parseFloat($(target).parent().parent().prev().html()); //单价
		var money = parseFloat($(target).parent().parent().next().html()); //小计		
		$(target).parent().parent().next().html(num * count + "元");

		//		当前行的勾勾
		var icon = $($(target).parent().parent().parent().children()[0]).children();
		//		console.log(icon)	
		//计算总共的商品数量
		var fir = parseInt($(".num-border>input:eq(0)").val());
		var sed = parseInt($(".num-border>input:eq(1)").val());
		var he = fir + sed;
		$(".accountL>div>span:first").html(fir + sed);
		if(icon.css("color") == "rgb(255, 103, 0)") {
			//计算已选的商品数量
			$(".accountL>.yx>.yi").html(fir + sed)
			//计算总价
			total()
		}

	} else if($(target).html() == "-") {
		var count = parseInt($(target).next().val());
		if(count > 1) {
			count--;
			$(target).next().val(count);
			var num = parseFloat($(target).parent().parent().prev().html()); //单价
			var money = parseFloat($(target).parent().parent().next().html()); //小计					
			$(target).parent().parent().next().html(num * count + "元"); //更改小计

			var icon = $($(target).parent().parent().parent().children()[0]).children();
			//计算总共的商品数量
			var fir = parseInt($(".num-border>input:eq(0)").val());
			var sed = parseInt($(".num-border>input:eq(1)").val());
			var he = fir + sed;
			$(".accountL>div>span:first").html(fir + sed);
			if(icon.css("color") == "rgb(255, 103, 0)") {
				$(".accountL>.yx>.yi").html(parseInt($(".accountL>.yx>.yi").html()) - 1)
				//计算总价
				var moneys = 0;
				total()

			}

		}
	}

})

//用户手动输入数量
$(".num-border>input").blur(function() {
	var count = parseInt($(this).val());
	$(this).val(count)
	var num = parseFloat($(this).parent().parent().prev().html()); //单价
	var money = parseFloat($(this).parent().parent().next().html()); //小计
	$(this).parent().parent().next().html(num * count + "元"); //更改小计	
	var icon = $($(this).parent().parent().parent().children()[0]).children();
	if(icon.css("color") == "rgb(255, 103, 0)") {
		console.log(1)
		//计算总共的商品数量
		var fir = parseInt($(".num-border>input:eq(0)").val());
		var sed = parseInt($(".num-border>input:eq(1)").val());
		var he = fir + sed;
		$(".accountL>div>span:first").html(fir + sed);
		//计算总价
		total()
	}
})

//删除
$(".del").click(function() {
	var tr = ($(this).parent().parent().parent())
	xj = parseFloat(tr.children()[0].children[5].innerHTML);
	var count = (tr.children()[0].children[4].children[0].children[1].value);
	$(".modal-bd").css("display", "block");
	$(".modal>.shan,.modal>.actions>button:first").click(function() {
		$(".modal-bd").css("display", "none");
	})
	$(".modal>.actions>button:last").click(function() {
		$(".modal-bd").css("display", "none");
			//		tr.css("display","none");
			tr.remove();
		if ($(".accountL>div>span:first").html()>1) {			
			//计算总价
			total_all.html($(".accountC>span").html() - xj);
			//计算已选商品
			$(".accountL>.yx>.yi").html($(".accountL>.yx>.yi").html() - count);
			$(".accountL>div>span:first").html($(".accountL>.yx>.yi").html());
		}else{
			$(".shopping,.account").remove();
			$(".kong").css("display","block")
		}

	})

})