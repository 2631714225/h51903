
$(document).ready(function(){
	var btns=$(".sectionLetf button");
	var imgs=$(".sectionLetf img");
	var lis=$(".sectionLetf ul li");
	var carousel=$("div.sectionLetf");
	var index=0;
	$(btns[0]).click(lMove);
	$(btns[1]).click(rMove);
	var timer=setInterval(rMove,3000);
	function rMove(){
	    if(index==4){
		    index=0;
	    }
	    setClass(index);
	    index++;
    }
	function lMove(){
		if(index==-1){
			index=3;
		}
		setClass(index);
	    index--;
	}
    lis.click(function(){
    	index=parseInt($(this).attr("cz"));
    	setClass(index);
    });
    carousel.mouseenter(()=>{
    	clearInterval(timer);
    });
    carousel.mouseleave(()=>{
    	timer=setInterval(rMove,1000);
    });
    function setClass(index){
    	$(imgs).removeClass();
	    $(imgs[index]).addClass("active");
	    $(lis).removeClass();
	    $(lis[index]).addClass("active");
    }
    
    
    //滚动监听
	$(document).scroll(()=>{
		var headerTop=parseInt($(".scrollTop").css("height"));
	    var top=parseInt($(window).scrollTop());
	    var imgTop=parseInt($(".sectionLetf").css("height"));
	    var totalHeight=parseInt($("section").css("height"));
	    if(top>headerTop&&$(".scrollTop").css("opacity")==1){
	    	//头部
	    	$(".scrollTop").css({
	    		"position":"fixed",
	    		"z-index":10,
	    		"top":"-100px",
	    		"opacity":0,
	    	});
	    	$(".scrollTop").animate({
	    		"opacity":0.99,
	    		"top":0,
	    	},1000);
	    	
	    }	
	    if(top<=headerTop){
	    	$(".scrollTop").css({
	    		"position":"static",
	    		"opacity":1,
	    	});
	    }
	   
	        if(top<totalHeight-headerTop-imgTop+34&&$(".sectionLetf").css("opacity")==1&&top>=headerTop){
	        		$("section .sectionLetf").css({
		    		"position":"fixed",
		    		"z-index":9,
		    		"opacity":0,
		    		"margin-top":"34px",
		    	  });
		    	  $("section .sectionLetf").animate({
		    		"opacity":0.99,
		    		"top":headerTop-34+"px",
		    	  },1000);		  	
	      }else if(top>=totalHeight-headerTop-imgTop+34){
	        	$(".sectionLetf").css({
	    		"position":"relative",
	    		"margin-top":totalHeight-headerTop-imgTop+"px",
	    		"opacity":1,
	    	  });
	       }else if(top<headerTop){
	       	    $(".sectionLetf").css({
	    		"position":"relative",
	    		"top":0,
	    		"opacity":1,
	    	  });
	       }
	});
	
	//点击切换
	var versionsDivs=$(".chooseVersion div");
	var colorDivs=$(".chooseColor div");
	versionsDivs.click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass();
		var version=$(".tpTop span:nth-of-type(2)");
		var memory=$(this).find("h4").html();
		version.html(memory);
		var money=$(this).find("span").html();
		$(".tpTop span:nth-of-type(4)").html(money);
	});
	colorDivs.click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass();
		var colorSpan=$(".tpTop span:nth-of-type(3)");
		var color=$(this).find("span").html();
		colorSpan.html(color);
	});
	
	var delayDivs=$(".chooseDelay>div");
	delayDivs.click(function(){
		if($(this).hasClass("active")){
			var messageH4=$(this).find("h4").html();
		    var listDivs=$(".totalPrice").find("div");
		    for(let i=1;i<listDivs.length;i++){
		    	if($(listDivs[i]).find("span:nth-of-type(1)").html()==messageH4){
		    		$(listDivs[i]).remove();
		    		$(this).removeAttr("exist");
		    	}
		    }
		    
			$(this).removeClass();
			$(this).find("i").html("");
		    $(this).find("i").css({
		    	"background":"#fff",
		    });
		    $(this).find("em").html("");
		    $(this).find("em").css({
		    	"background":"#fff",
		    });
		  
		}else{
			$(this).siblings().removeClass();
		    $(this).addClass("active");
		    $(this).siblings().find("i").css("background","#fff");
		    $(this).siblings().find("em").css("background","#fff");
		    $(this).find("i").html("√");
		    $(this).find("i").css({
		    	"background":"#ff6700",
		    	"color":"#fff",
		    });
		    $(this).find("em").html("√");
		    $(this).find("em").css({
		    	"background":"#ff6700",
		    	"color":"#fff",
		    });
		    
		    
		    if(!$(this).attr("exist"))
		    { 
		    	if($($(this).siblings()[1]).attr("exist")){
		    		var messageH4=$($(this).siblings()[1]).find("h4").html();
		            var listDivs=$(".totalPrice").find("div");
		            for(let i=1;i<listDivs.length;i++){
		    	    if($(listDivs[i]).find("span:nth-of-type(1)").html()==messageH4){
		    		    $(listDivs[i]).remove();
		    		    $(this).removeAttr("exist");
		    		    $($(this).siblings()[1]).removeAttr("exist");
		    	    }
		        }
		    }
		    	var priceDiv=$("<div></div>");
			    var protectSpan=$("<span></span>");
			    var priceSpan=$("<span></span>");
			    priceSpan.addClass("fr");
			    var protectName=$(this).find("h4").html();
			    var protectPrice=$(this).find("span:nth-of-type(4)").html();
			    protectSpan.html(protectName);
			    priceSpan.html(protectPrice);
			    priceDiv.append(protectSpan);
			    priceDiv.append(priceSpan);
			    $(".tpTop").after(priceDiv);
			    $(this).attr("exist",1);
		    }
		}
		var totalDivs=$(".totalPrice").find("div");//计算总价
		var sum=0;
		for(let i=0;i<totalDivs.length;i++){
			console.log($(totalDivs[i]));
			sum+=parseInt($(totalDivs[i]).children("span:last-child").html());
		}
		$(".totalPrice>span").html(sum+"元");
	});
	
	//加入购物车
	var i=0;
	$(".srFoot button").click(function(){
		i++;
		if(i==1){
			var alert=$("<div>添加成功</div>");
			alert.css({
				"position":"absolute",
				"right":0,
				"top":0,
				"background":"#ff6700",
				"width":"50%",
			}).stop().animate({
				 "right":"-600px",
				 "top":"-1000px",
				 "transform":"rotate("+360+"deg)",
				 "opacity":0.5,
			},2000,function(){
				alert.remove();
			});
			$(".srFoot button").append(alert);
			var num=$(".topbar-cart>a>span").html();
			num=parseInt(num.slice(1,-1));
			num++;
			$(".topbar-cart>a>span").html("("+num+")");
			}
		else{
			var alert=$("<div>购物车中已存在</div>");
			alert.css({
				"position":"absolute",
				"right":"-80px",
				"top":"-60px",
				"background":"#ff6700",
				"width":"50%",
				"border-radius":"50%",
			}).stop().animate({
				 "opacity":0,
			},2000,function(){
				alert.remove();
			});
			$(".srFoot button").append(alert);
		}
		
	});
});



