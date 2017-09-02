$(function(){
	
	
	$(".size").click(function(){
		$(this).css({"background" : "#000","color" : "white"}).siblings().css({"background" : "#fff","color":"#000"})
	})
	
	function count() {
		var count = 1;
		$(".add").click(function(){
			count++;
			$(this).siblings("b").html(count);
		})
		$(".sub").click(function(){
			if(count<=1) {
				return ;
			}
			count--;
			$(this).siblings("b").html(count);
		})
	}
	count();
	
	$(".goCart").click(function(){
		$(this).parents(".size-ul1").hide().siblings().show();
	})
	$(".Collection").click(function(){
		$(this).parents(".size-ul2").hide().siblings().show();
	})
	
	/*遍历Description.json，获取动态值*/
	var myId = location.search.slice(1);
	console.log(myId);
	
	$.get("json/Description.json",function(data){

			for (var i = 0; i < data.length; i++) {
				
				console.log(data[i].ID);
				if(myId == data[i].ID) {
					var obj = data[i];
					$("<li><a href='#'><img src="+obj.smallImg1+"/></a></li>").appendTo(".main-list2");
					$("<li><a href='#'><img src="+obj.smallImg2+"/></a></li>").appendTo(".main-list2");
					$("<li><a href='#'><img src="+obj.smallImg3+"/></a></li>").appendTo(".main-list2");
					$("<li><a href='#'><img src="+obj.smallImg4+"/></a></li>").appendTo(".main-list2");
					
					$("<li class='active'><a href='#'><img src="+obj.bigImg1+"/></a></li>").appendTo(".main-list1");
					$("<li><a href='#'><img src="+obj.bigImg2+"/></a></li>").appendTo(".main-list1");
					$("<li><a href='#'><img src="+obj.bigImg3+"/></a></li>").appendTo(".main-list1");
					$("<li><a href='#'><img src="+obj.bigImg4+"/></a></li>").appendTo(".main-list1");
					
					
					var li = $("<li></li>");
					$("<a href='#'>" +obj.title1+ "</a>>").appendTo(li);
					$("<a href='#'>" +obj.title2+ "</a>>").appendTo(li);
					$("<a href='#'>" +obj.title3+ "</a>").appendTo(li);
					$(".center-ul").append(li);
					
					$("<img src= "+ obj.topImg+"/>").appendTo(".topImg");
					
					$("<p class='tTitle'>"+obj.bigTitle+"</p>").appendTo(".mainRight-top");
					$("<p class='tA'>"+obj.id+"</p>").appendTo(".mainRight-top");
					$("<p>市场价：<span class='Tspan1'>"+obj.oldPrice+"</span></p>").appendTo(".mainRight-top");
					$("<p>促销价：<span class='Tspan2'>"+obj.newPrice+"</span></p>").appendTo(".mainRight-top");
					$("<img src= "+ obj.centerImg+"/>").appendTo(".mainRight-top");
					
					
					
					
				}
				
			
				
			}
		
	})
	
	
	$("body").on("mouseenter",".main-list2 li",function(){
		var index = $(this).index();
		$(".main-list1 li").eq(index).addClass("active").siblings("li").removeClass("active");
	})
	
	$(".goCart").click(function(){
		console.log(123);
		/*获取商品内容*/
		var goodsId = $(this).parents(".mainRight-bottom").siblings(".mainRight-top").find(".tA").html();
		var goodsImg = $(this).parents(".main-right").siblings(".main-list2").find("img").eq(0).attr("src");
		var goodsPrice = $(this).parents(".mainRight-bottom").siblings(".mainRight-top").find(".Tspan2").html();
		var goodsName = $(this).parents(".mainRight-bottom").siblings(".mainRight-top").find(".tTitle").html();
		var goodsNum = $("#goodsNum").html();
		console.log(goodsNum);
		
		/*使用cookie将商品加入到购物车*/
		/*如果是第一次加入购物车，则$.cookie（“cart”）是undefined那么arr为空*/
		/*如果第二次加入，则需要使用原来的商品，再添加新商品*/
		var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		
		var isExist = false; //表示是否存在相同的商品
		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i]; //原购物车的每个商品
			if (obj.id == goodsId) {
				//如果存在相同商品, 则增加数量
				obj.num++; 
				isExist = true; //存在相同商品
			}
		}
		
		//如果不存在相同的商品, 则添加该新商品到购物车数组arr中
		if (isExist == false) {
			//对象, 商品信息
			var goods = {
				id : goodsId,
				img : goodsImg,
				price : goodsPrice,
				name : goodsName,
				num : goodsNum
			}
			arr.push(goods); //将新的商品加入数组arr中
		}
		
		
		/*json序列化*/
		var arrStr = JSON.stringify(arr);
		$.cookie("cart",arrStr,{expires: 30, path:"/"});
		console.log($.cookie("cart"));
		
		/*去结算页面*/
		$(".gotoCart").click(function(){
			
			location.href = "cart.html"; //进入购物车页面
			
		});
		
	})
	
	
})


