$(function(){
	var checkArr = [];
	//从cookie()获取商品
	var arr = $.cookie("cart");
	if(arr) {
		arr = JSON.parse(arr); //json解析
		$.each(arr,function(){
			checkArr.push(true);
		});
	}
	refreshCart();
	//刷新购物车，重新从cookie中获取购物车商品信息
	function refreshCart() {
		//从cookie中获取购物车商品信息
		var arr = $.cookie("cart");
		if(arr) {
			arr = JSON.parse(arr) //josn解析
			$("tbody").empty();
			
			for (var i = 0; i < arr.length; i++) {
				var tr = $("<tr></tr>")
				var obj = arr[i];
				var td1 = $("<td></td>");
				var td2 = $("<td></td>");
				var td3 = $("<td></td>");
				var td4 = $("<td></td>");
				var td5 = $("<td class='td_5'></td>");
				var td6 = $("<td></td>");
				
				
				
				$("<img src="+obj.img+" class='xzImg'/>").appendTo(td1);
				$("<p class='xzTitle'><a href='#'>"+obj.name+"</a></p>").appendTo(td1);
				td2.html(obj.price);
				td3.html("0个");
				$("<button class='cartSub'>-</button>").appendTo(td4);
				$("<input type='text' class='cartSum' value="+obj.num+">").appendTo(td4);
				$("<button class='cartAdd'>+</button>").appendTo(td4);
					
					
				var s = 0;
				if (checkArr[i]) {
					
					
					s += obj.price * obj.num;
					console.log(parseInt(obj.price));console.log(obj.num);
				}
				
				td5.html(s);
				
				$("<input type='button' value='删除' class='del'/>").appendTo(td6);
				$("<input type='button' value='移入收藏'/>").appendTo(td6);
					
				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);
				
				$("tbody").append(tr);
			}
			
		}
	}
	
	
	
	
	//+
	$("body").on("click", ".cartAdd", function(){
		
		var n = $(this).prev().val();
		console.log(n);
		n++;
		$(this).prev().val(n);
		var dj = $(this).parent().prev().prev().html();
		
		var s = dj * n;
		console.log(dj);
		$(this).parent().next().html(s);
		
		preSum();
//		var index = $(this).index(".cartAdd");
//		console.log( index );
//		$(".qtRight-p span").html($(".td_5").html());
//		//从cookie中获取原来的购物车数组arr
//		var arr = JSON.parse( $.cookie("cart") );
//		arr[index].num++; //把当前商品的数量++
//		//再把修改后的数组arr重新保存到cookie
//		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
//		console.log( $.cookie("cart") );
//		//刷新购物车商品
//		refreshCart();
		
		
	})
	//-
	//-
	$("body").on("click", ".cartSub", function(){
		var n = $(this).next().val();
		console.log(n);
		n--;
		if(n<1) {
			return;
		}
		$(this).next().val(n);
		var dj = $(this).parent().prev().prev().html();
		
		var s = dj * n;
		console.log(dj);
		$(this).parent().next().html(s);
		preSum();
	})
	//删除
	$("body").on("click", ".del", function(){
		var index = $(this).index(".del");
		
		//从cookie中获取原来的购物车数组arr
		var arr = JSON.parse( $.cookie("cart") );
		
		//删除当前的商品
		arr.splice(index, 1); 
		checkArr.splice(index, 1); //同步删除checkArr的当前状态
		
		//再把修改后的数组arr重新保存到cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新购物车商品
		refreshCart();
	})
	console.log()
	
	var preSum = function(){
		var sum=0;
		for(var i = 0;i<$('.td_5').length;i++){
			var num = parseInt( $(".td_5").eq(i).html() );
	//		console.log(num);
			sum += num;
		}
		console.log(sum);
		$(".qtRight-p span").html(sum);
	}
	$(".djBtn").click(function(){
		location.href = "index.html";
	})
	
})
