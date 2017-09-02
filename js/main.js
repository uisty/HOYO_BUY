$(function(){
	//先获取Carousel.json中的数据
	$.get("json/Carousel.json",function(data){
		console.log(data.length);
		for (var i = 0; i <data.length; i++) {
			var obj = data[i];
			//动态添加节点
			$("<li><a href='#'><img src="+obj.bigImg+"/></a></li>").appendTo(".Carousel-list1");
			$("<li><img src="+obj.smallImg+"/></li>").appendTo(".Carousel-list2"); 
			
			if(i==0) {
				$(".Carousel-list2 li").first().addClass("active");
			}
		}
		lunbo();
	})
	/*//获取CarouselIcons.json数据
	$.get("json/CarouselIcons.json",function(data){
		console.log(data.length);
		for (var i = 0; i <data.length; i++) {
			var obj = data[i];
			//动态添加节点
			$("<li><img src="+obj.img+"/></li>").appendTo(".Carousel-list2");
			if(i==0) {
				$(".Carousel-list2 li").first().addClass("active");
			}
		}
		
	})*/
	//轮播
	function lunbo() {
		
		var list1 = $(".Carousel-list1");
		var list2 = $(".Carousel-list2");
		var li1 = $(".Carousel-list1 li");
		var li2 = $(".Carousel-list2 li");
		
		//初始化显示第一张图
		li1.eq(0).show().siblings().hide()
		
		//图片的总数量
		var size = $(".Carousel-list1 li").length;
		
		//即将移动到的图片的下标
		var i =0;
		//开启定时器
		var timer = setInterval(function(){
			i++;
			move();
		},10000);
		
		
		function move(){
			console.log(11)
			//如果超出图片总数量
			if(i>=size) {
				i=0;
			}
			
			//动画移动
			li1.eq(i).stop().fadeIn(400).siblings().fadeOut(400);
			
			li2.eq(i).addClass("active").siblings().removeClass("active");
			
		}
		
		//上一页
		$(".prev").click(function(){
			i--;
			move();
		})
		
		//下一页
		$(".next").click(function(){
			i++;
			move();
		})
		
		//当移入到某一张图时
		li2.mouseenter(function(){
			var index = $(this).index();
			i = index;
			move();
		})
		//当鼠标移入图片区域，让定时器停止，移出再开启定时器
		$(".Carousel").mouseenter(function(){
			clearInterval(timer);
		})
		//移出重新开始定时器
		$(".Carousel").mouseleave(function(){
			timer = setInterval(function(){
				i++;
				move();
			},10000);
		})
		
	}
	
	//人气品单内容
	//获取buzzContent.json的数据
	$.get("json/buzzContent.json",function(data){
		
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			//创建动态节点
			$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".buzzContent");
			$(".buzzContent img").css("margin" ,  "0 8px 4px 0px")
		
			$(".buzzContent img").eq(4).css("margin" , "0 0 4px 0");
			
			
			$(".buzzContent img").eq(9).css("margin" , "0 0 4px 0");
			
		}
		
	})
	
	
	//优选品牌内容
	
	
	$(".prev2").click(function(){	 
		if ($(".brandLogo-list1").css("display") == "block")
			$(".brandLogo-list1").hide();
		else 
			$(".brandLogo-list1").fadeIn(800);

		if ($(".brandLogo-list2").css("display") == "block")
			$(".brandLogo-list2").hide()
		else 
			$(".brandLogo-list2").fadeIn(800);
	})
	$(".next2").click(function(){	 
		if($(".brandLogo-list2").css("display")=="block")
			$(".brandLogo-list2").hide();
		else {
			$(".brandLogo-list2").fadeIn(800);
		}
		
		if($(".brandLogo-list1").css("display") == "block")
			$(".brandLogo-list1").hide();
		else {
			$(".brandLogo-list1").fadeIn(800);
		}
			
	})
	
	
	//获取brandLogo.json的内容
	$.get("json/brandLogo.json",function(data){
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".brandLogo-list2");
			
		}
		
	
	})
	
	//获取brandLogo.json2的内容
	$.get("json/brandLogo2.json",function(data){
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".brandLogo-list1");
			
		}
		
	
	})
	/*最新速报内容*/
	//获取newContent.json的数据
	$.get("json/newContent.json",function(data){
		for (var i = 0; i < data.length-2; i++) {
			var obj = data[i];
			
			
			
			if(i==0) {
				$("<a href='#' class='newContent-a1'><img src="+obj.img+"/></a>").appendTo(".newContent-list");
			}else if(i==4||i==5||i==6){
				$("<a href='#' class='newContent-a4'><img src="+obj.img+"/></a>").appendTo(".newContent-list");
			}
			else if(i==1||i==2||i==3){
				$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".newContent-list");
			}
			
			
		}
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			if(i==7) {
				$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".newContent-a8");
			}
			if(i==8) {
				$("<a href='#'><img src="+obj.img+"/></a>").appendTo(".newContent-a9");
			}
		}
		
		
	})
	/*潮流上装内容*/
	$.get("json/currents.json",function(data){
		for (var i = 0; i < data.length; i++) {
			var arr = data[i];
			for (var j = 0; j < arr.length; j++) {
				var obj = arr[j];
				
				if(j==4||j==9||j==14) {
					var li = $("<li class='jacket-right'></li>");
				}else if(j==10||j==11||j==12||j==13) {
					var li = $("<li class='jacket-bottom'></li>");
				}else if(j==15){
					var li = $("<li class='jacket-position'></li>")
				}else {
					var li = $("<li></li>")
				}
				

				$("<a href ='#'><img src="+obj.img+"/></a>").appendTo(li);
				
				$(".jacket-list").eq(i).append(li);
			}
		}
	})
	
	var myData = null //
	
	$("body").on("click", ".goodsImg", function(){
		var index = $(this).index();
		console.log(index);
		if (myData) {
			var id = myData[index].id;
			//进入对应商品的详情
			location.href = "Description.html?" + id;
			console.log(id);
		}
		
	})
	
	
	//最新上架内容
	//获取newGoods.json数据
	$.get("json/newGoods.json",function(data){
		myData = data;
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			//创建节点
			var div = $("<div class='goodsImg left'></div>");
			$("<img src="+obj.img+" class='newImg' />").appendTo(div);
			$("<div class='goodsPrice'><a class='goodsTitle'>"+obj.title+"</a><p class='price'>"+obj.price+"</p></div>").appendTo(div);
			
			
			$(".newGoods").append(div);
		}
	})
	
	/*问卷调查切换*/
	function exchange() {
		$(".exchange-div form").eq(0).show().siblings("form").hide();
		$(".exchange-dd span").click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			var index = $(this).index();
			
			$(".exchange-div form").eq(index).show().siblings("form").hide();
			
			
		})
		
		
	}
	exchange();
	
	function toTop() {
		
		$(window).scroll(function(){
			
			if($(window).scrollTop()>=$(window).height()) {
				$("#toTop").show();
				
			}
			else {
				$("#toTop").hide();
			}	
		});
		
		
		$("#toTop").click(function(){
			$('body,html').animate({scrollTop:0},1000); 
		});
		
		$("#toTop").mouseenter(function(){
			$(this).css("opacity" , 1);
		})
		$("#toTop").mouseleave(function(){
			$(this).css("opacity" , 0.8);
		})
		
		
	}
	toTop();
})



