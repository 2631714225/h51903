$($("form>div>input")[0]).focus((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #ff6700"
	});
	$(target).attr("placeholder", "收货人姓名")
	$(target).next().css({
		"top": "12px",
		"opacity": 1,
		"background": "#fff",
		"font-size": "12px"

	})
})
$($("form>div>input")[0]).blur((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #e0e0e0"
	});
	$(target).attr("placeholder", "姓名")
	$(target).next().css({
		"opacity": 0
	})
})

$($("form>div>input")[1]).focus((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #ff6700"
	});
	$(target).attr("placeholder", "11位手机号")
	$(target).next().css({
		"top": "12px",
		"opacity": 1,
		"background": "#fff",
		"font-size": "12px"

	})
})
$($("form>div>input")[1]).blur((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #e0e0e0"
	});
	$(target).attr("placeholder", "手机号")
	$(target).next().css({
		"opacity": 0
	})
})

$($("form>div>textarea")[0]).focus((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #ff6700"
	});
	$(target).attr("placeholder", "详细地址，路名或街道名称，门牌号")
	$(target).next().css({

		"top": "-4px",
		"opacity": 1,
		"background": "#fff",
		"font-size": "12px"
	})
})
$($("form>div>textarea")[0]).blur((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #e0e0e0"
	});
	$(target).attr("placeholder", "详细地址")
	$(target).next().css({
		"opacity": 0
	})
})

$($("form>div>input")[3]).focus((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #ff6700"
	});
	$(target).attr("placeholder", "")
	$(target).next().css({
		"top": "-7px",
		"opacity": 1,
		"background": "#fff",
		"font-size": "12px"

	})
})
$($("form>div>input")[3]).blur((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #e0e0e0"
	});
	$(target).attr("placeholder", "邮政编码")
	$(target).next().css({
		"opacity": 0
	})
})

$($("form>div>input")[4]).focus((e) => {

	e = e || window.event
	let target = e.target || e.srcElement;

	$(target).css({
		"border": "1px solid #ff6700"
	});
	$(target).attr("placeholder", "如“家”，“公司”。限5个字以内")
	$(target).next().css({
		"top": "-7px",
		"opacity": 1,
		"background": "#fff",
		"font-size": "12px"
	})
})
$($("form>div>input")[4]).blur((e) => {
	e = e || window.event
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #e0e0e0"
	});
	$(target).attr("placeholder", "地址标签")
	$(target).next().css({
		"opacity": 0
	})
})

$(".text1").focus((e) => {
	e = e || window.event;
	let target = e.target || e.srcElement;
	$(target).css({
		"border": "1px solid #ff6700",
	});

	$(".xtc").css({
		"border": "1px solid #ff6700"
	});

})

$(".tc div:nth-of-type(3)>input").focus((e) => {
	e = e || window.event;
	let target = e.target || e.srcElement;
	$(".xtc").css({
		"display": "block",
	})
})
$(".xtc>b").click((e) => {
	$(".xtc").css({
		"display": "none",
	})
})

$(".modal-footer>button:eq(0)").click(() => {
	if($($("form>div>input")[0]).val() == "" && $($("form>div>input")[1]).val() == "" && $($("form>div>textarea")[0]).val() == "") {
		return false;
	} else {
		var input1 = $($("form>div>input")[0]).val()
		var input2 = $($("form>div>input")[1]).val()
		var input3 = $($("form>div>textarea")[0]).val()
		$($("form>div>input")[0]).val("");
		$($("form>div>input")[1]).val("");
		$($("form>div>textarea")[0]).val("");
		$($("form>div>input")[3]).val("");
		$($("form>div>input")[4]).val("");
		$($("form>div>input")[2]).val("");

		var $div = $("<div class='dzk2'></div>") //生成元素一个div
		var $h3 = $("<h3></h3>") //生成一个h3
		$h3.html(input1) //给h3设置html
		$div.append($h3) //将h3给压入div中
		var $h4 = $("<h4></h4>")
		$h4.html(input2)
		$div.append($h4)
		var $h5 = $("<h5></h5>")
		$h5.html(input3)
		$div.append($h5)
		var $i = $("<i></i>")
		$i.html("修改")
		$div.append($i)
		var $b = $("<b></b>")
		$b.html("删除")
		$div.append($b)

		$(".dzk").append($div) //将生成的div给压入最外面盒子
		$(".dzk2>b").click((e) => {
			e = e || window.event;
			let target = e.target || e.srcElement
			$(target).parent().remove()
		})

	}
})

$(".dzk2>b").click((e) => {
	e = e || window.event;
	let target = e.target || e.srcElement
	$(target).parent().remove()
})

console.log($(".dzk2>b"))