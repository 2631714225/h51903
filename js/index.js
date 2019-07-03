			$(".te").focus(function() {

				$(".form>a").hide()
			})
			$(".te").blur(function() {

				$(".form>a").show()
			})

			var $arr = ["../images/index/xmad_15610381131993_nQbOd.jpg", "../images/index/xmad_15603108972101_xQIKl.jpg", "../images/index/xmad_15486597522208_HOEjJ.jpg", "../images/index/xmad_15609507520682_FBLpS.jpg", "../images/index/xmad_15608246770003_KZDoR.jpg"];
			var i = 0;

			$(".you").click(() => {
				if(!$("img").is(":animated")) {
					i++
					if(i == 5) {
						i = 0
					}
					$(".gd").append($(`<img class='rimg' src='${$arr[i]}'>`))
					$(".gd>img:first").animate({
						"left": "-100%"
					}, 2000);
					$(".rimg").animate({
						"left": "0%",
						"opacity": "1",
						"display": "block"
					}, 2000, function() {
						$(this).siblings().remove()
					})
					$($(".lb>ul>li")[i]).addClass("lis")
					$($(".lb>ul>li")[i]).siblings().removeClass("lis")
				}
			})

			$(".zuo").click(() => {
				if(!$("img").is(":animated")) {
					i--
					if(i == -1) {
						i = 4
					}
					$(".gd").append($(`<img class='limg' src='${$arr[i]}'>`))
					$(".gd>img:first").animate({
						"left": "100%"
					}, 2000);
					$(".limg").animate({
						"left": "0%",
						"opacity": "1",
						"display": "block"
					}, 2000, function() {
						$(this).siblings().remove()
					})
					$($(".lb>ul>li")[i]).addClass("lis")
					$($(".lb>ul>li")[i]).siblings().removeClass("lis")
				}
			})

			$(".lb>ul>li").click((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				if(!$("img").is(":animated")) {
					i = $(target).attr("yx")
					$(target).addClass("lis")
					var $num = $(".lis").attr("yx")
					$(target).siblings().removeClass("lis")

					if(i > $num) {
						$(".gd").append($(`<img class='rimg' src='${$arr[i]}'>`))
						$(".gd>img:first").animate({
							"left": "-100%"
						}, 2000);
						$(".rimg").animate({
							"left": "0%",
							"opacity": "1",
							"display": "block"
						}, 2000, function() {
							$(this).siblings().remove()
						})
					} else {
						$(".gd").append($(`<img class='limg' src='${$arr[i]}'>`))
						$(".gd>img:first").animate({
							"left": "100%"
						}, 2000);
						$(".limg").animate({
							"left": "0%",
							"opacity": "1",
							"display": "block"
						}, 2000, function() {
							$(this).siblings().remove()
						})

					}

				}
			})

			times = setInterval(() => {
				$(".you").click()
			}, 2000);

			$(".lb").mouseover(() => {
				clearInterval(times)

			});

			$(".lb").mouseout(() => {
				times = setInterval(() => {
					$(".you").click()
				}, 2000)

			});

			var qh = 0
			$(".qiehuan>li").mouseenter((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				qh = $(target).attr("yqn")
				console.log($(target).attr("yqn"))
				$($(".cpqh_centent_rigth")[qh]).addClass("xs")
				$($(".cpqh_centent_rigth")[qh]).siblings().removeClass("xs")
			})

			var qh1 = 0
			$(".qiehuan1>li").mouseenter((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				qh1 = $(target).attr("yqny")
				console.log(qh1 = $(target).attr("yqny"))
				$($(".cpqh_centent_rigth1")[qh1]).addClass("xs1")
				$($(".cpqh_centent_rigth1")[qh1]).siblings().removeClass("xs1")
			})

			var qh2 = 0
			$(".qiehuan2>li").mouseenter((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				qh2 = $(target).attr("yqnq")
				console.log(qh1 = $(target).attr("yqnq"))
				$($(".cpqh_centent_rigth2")[qh2]).addClass("xs2")
				$($(".cpqh_centent_rigth2")[qh2]).siblings().removeClass("xs2")
			})

			var qh3 = 0
			$(".qiehuan3>li").mouseenter((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				qh3 = $(target).attr("yqnn")

				$($(".cpqh_centent_rigth3")[qh3]).addClass("xs3")
				$($(".cpqh_centent_rigth3")[qh3]).siblings().removeClass("xs3")
			})

			var qh4 = 0
			$(".qiehuan4>li").mouseenter((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				qh4 = $(target).attr("yqnyy")

				$($(".cpqh_centent_rigth4")[qh4]).addClass("xs4")
				$($(".cpqh_centent_rigth4")[qh4]).siblings().removeClass("xs4")
			})

			var jl = 0
			var y = 0
			$($(".recommend_head>button")[0]).click((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				y++
				if(y >= 4) {
					y = 0
				}

				jl = y * -1212.5
				$(".recommend_centent ul").css({
					"left": `${jl}px`
				})

			})

			$($(".recommend_head>button")[1]).click((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				y--
				if(y == -1) {
					return y = 3
				} else {
					jl = y * -1212.5
					$(".recommend_centent ul").css({
						"left": `${jl}px`
					})
				}

			})

			time = setInterval(() => {
				$($(".recommend_head>button")[0]).click()
			}, 3000);

			$(".recommend_centent ul").mouseover(() => {
				clearInterval(time)

			});

			$(".recommend_centent ul").mouseout(() => {
				time = setInterval(() => {
					$($(".recommend_head>button")[0]).click()
				}, 3000)
			});

			var jj = 0;
			$($(".qh>button")[0]).click((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				jj++
				if(jj >= 3) {
					return jj = 2
				} else {
					$($(".xlb")[jj]).addClass("xl")
					$($(".xlb")[jj]).siblings().removeClass("xl")
					$($(".qhh>ul>li")[jj]).addClass("lili")
					$($(".qhh>ul>li")[jj]).siblings().removeClass("lili")
				}
			})

			$($(".qh>button")[1]).click(() => {
				jj--
				if(jj <= -1) {
					return jj = 0
				} else {
					$($(".xlb")[jj]).addClass("xl")
					$($(".xlb")[jj]).siblings().removeClass("xl")
					$($(".qhh>ul>li")[jj]).addClass("lili")
					$($(".qhh>ul>li")[jj]).siblings().removeClass("lili")
				}
			})

			var jj1 = 0;
			$($(".qh1>button")[0]).click(() => {
				console.log(1)
				jj1++
				if(jj1 >= 3) {
					return jj1 = 2
				} else {
					$($(".qh1>.xlb")[jj1]).addClass("xl")
					$($(".qh1>.xlb")[jj1]).siblings().removeClass("xl")
					$($(".qh1>ul>li")[jj1]).addClass("lili")
					$($(".qh1>ul>li")[jj1]).siblings().removeClass("lili")
				}
			})

			$($(".qh1>button")[1]).click(() => {
				jj1--
				if(jj1 <= -1) {
					return jj1 = 0
				} else {
					$($(".qh1>.xlb")[jj1]).addClass("xl")
					$($(".qh1>.xlb")[jj1]).siblings().removeClass("xl")
					$($(".qh1>ul>li")[jj1]).addClass("lili")
					$($(".qh1>ul>li")[jj1]).siblings().removeClass("lili")

				}
			})

			var jj2 = 0;
			$($(".qh2>button")[0]).click(() => {
				jj2++
				if(jj2 >= 3) {
					return jj2 = 2
				} else {
					$($(".qh2>.xlb")[jj2]).addClass("xl")
					$($(".qh2>.xlb")[jj2]).siblings().removeClass("xl")
					$($(".qh2>ul>li")[jj2]).addClass("lili")
					$($(".qh2>ul>li")[jj2]).siblings().removeClass("lili")
				}
			})

			$($(".qh2>button")[1]).click(() => {
				jj2--
				if(jj2 <= -1) {
					return jj2 = 0
				} else {
					$($(".qh2>.xlb")[jj2]).addClass("xl")
					$($(".qh2>.xlb")[jj2]).siblings().removeClass("xl")
					$($(".qh2>ul>li")[jj2]).addClass("lili")
					$($(".qh2>ul>li")[jj2]).siblings().removeClass("lili")
				}
			})

			var jj3 = 0;
			$($(".qh3>button")[0]).click(() => {
				jj3++
				if(jj3 >= 3) {
					return jj3 = 2
				} else {
					$($(".qh3>.xlb")[jj3]).addClass("xl")
					$($(".qh3>.xlb")[jj3]).siblings().removeClass("xl")
					$($(".qh3>ul>li")[jj3]).addClass("lili")
					$($(".qh3>ul>li")[jj3]).siblings().removeClass("lili")
				}
			})

			$($(".qh3>button")[1]).click(() => {
				jj3--
				if(jj3 <= -1) {
					return jj3 = 0
				} else {
					$($(".qh3>.xlb")[jj3]).addClass("xl")
					$($(".qh3>.xlb")[jj3]).siblings().removeClass("xl")
					$($(".qh3>ul>li")[jj3]).addClass("lili")
					$($(".qh3>ul>li")[jj3]).siblings().removeClass("lili")
				}
			})
			$(".qh3>ul>li").click((e) => {
				e = e || window.event
				let target = e.target || e.srcElement
				console.log($(target).attr("ys"))

			})

			$(".shipin>img").click(() => {
				$($(".mtk")[0]).css({
					"display": "block"
				})

			})
			$(".shipin h6").click(() => {
				$($(".mtk")[0]).css({
					"display": "none"
				})
			})

			$(document).scroll(() => {

				if($(window).scrollTop() >= 1300) {
					$(".fhdb").css({
						"display": "block"
					})
				}

			})
			$(".fhdb").click(() => {
				$("html,body").animate({
					scrollTop: 0
				}, 500);

			})