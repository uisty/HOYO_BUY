$(function(){
	$(".tool-li").mouseenter(function(){
		$(this).find("a").eq(0).css({ "background": "#ccc", "border-bottom": "1px solid #dfdfdf"})
		$(this).find(".tool-a").show();
	})
	
	$(".tool-li").mouseleave(function(){
		$(this).find("a").eq(0).css({ "background": "white", "border-bottom": "none"})
		$(this).find(".tool-a").hide();
	})
	
	
	$(".xllb").mouseenter(function(){
		$(".xllb-ul").slideDown();
	})
	$(".xllb").mouseleave(function(){
		$(".xllb-ul").slideUp();
	})
	$(".xllb-ul li").click(function(){
		$(this).parent().siblings('b').html($(this).html());
	})
	
	$("#id").blur (function(){
		if($(this).val()=="") {
			$(this).siblings("span").eq(0).show();
			
		}
		console.log(123);
	})
	
	
	//登录: 直接使用cookie中保存的用户, 将要登录的用户名和密码和已经注册的每个用户名和密码去匹配 , 如果匹配成功, 则表示登录成功 
	
	//自动填入上次登录的用户名和密码
	var oldLoginUser = $.cookie("loginUser");
	if (oldLoginUser) {
		oldLoginUser = JSON.parse(oldLoginUser); 
		
		$(".id").val(oldLoginUser.username); //自动填入用户名
		$(".pwd").val(oldLoginUser.pwd); //自动填入密码
	}
	
	//点击登录按钮
	$(".loginBtn").click(function(){
		
		var username = $(".id").val(); //用户名
		var pwd = $(".pwd").val(); //密码
		
		//获取cookie中的所有用户
		var arr = $.cookie("users");
		if (arr) {
			arr = JSON.parse(arr); 
			
			//遍历, 查找是否存在匹配的用户名和密码
			var isExist = false; //表示是否存在匹配的用户名和密码
			for (var i=0; i<arr.length; i++) {
				//如果存在匹配的用户名和密码, 则表示登录成功!
				if (username == arr[i].username && pwd == arr[i].pwd) {
					console.log("恭喜您, 登录成功!");
					isExist = true; //存在匹配的
					
					//保存登录成功后的用户名,密码
					var loginUser = {username: username, pwd: pwd};
					$.cookie("loginUser", JSON.stringify(loginUser), {expires:30, path:"/"});
					$("#login-register").html(username);
					$(".tool-li2").html(username).css({"color":"red"});
					/*$(".tool-li2").find("a").eq(0).attr("href" , "index.html");*/
					location.href = "index.html";
				}
			}
			
			if (isExist == false) {
				alert("用户名或密码错误, 请重新登录!");
			}
		}
		else {
			alert("请先注册!");	
		}
	})
	
	
})
