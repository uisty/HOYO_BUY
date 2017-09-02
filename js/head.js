$(function(){
	
	/*topleft 头部顶部左边*/
	$(".headerTop-left").mouseenter(function(){
		$(this).find(".headerTop-list").show();
		
	})
	$(".headerTop-list li").mouseenter(function(){
		$(this).find("b").hide();
		$(this).find("span").addClass("active");
	})
	$(".headerTop-list li").mouseleave(function(){
		$(this).find("b").show();
		$(this).find("span").removeClass("active");
	})
	$(".headerTop-left").mouseleave(function(){
		$(this).find(".headerTop-list").hide();
	})
	/*topleft 头部顶部右边*/
	$(".phone").mouseenter(function(){
		$(this).css("background" , "#dcdcdc");
		$(this).find(".two-bar-codes").show();
	})
	$(".phone").mouseleave(function(){
		$(this).css("background" , "");
		$(this).find(".two-bar-codes").hide();
		
	})
	
	//centerleft 头部中间左边
	$(".headerCenter-left-list li").eq(0).click(function(){
		$(this).addClass("boys").siblings().removeClass();
	})
	$(".headerCenter-left-list li").eq(1).click(function(){
		$(this).addClass("girls").siblings().removeClass();
	})
	$(".headerCenter-left-list li").eq(2).click(function(){
		$(this).addClass("kids").siblings().removeClass();
	})
	$(".headerCenter-left-list li").eq(3).click(function(){
		$(this).addClass("lifeStyle").siblings().removeClass();
	})
	
	
	//logo转化
	var timer = setInterval(function(){
		
		$(".headLogo").css("background" , "url(img/headImg/logo1.jpg)").fadeIn(10000);
		
	},9000)
	var timer = setInterval(function(){
		
		$(".headLogo").css("background" ,"url(img/headImg/logo2.jpg)").fadeIn(9000);
	},8000)
	
	//购物车
	$(".go-cart").mouseenter(function(){
		$(".partCart").show();
	})
	$(".go-cart").mouseleave(function(){
		$(".partCart").hide();
	})
	
	//二级导航
	$(".headerBottom-list li").mouseenter(function(){
		$(this).find(".two-nav").show();
	})
	$(".headerBottom-list li").mouseleave(function(){
		$(this).find(".two-nav").hide();
	})
	
})
