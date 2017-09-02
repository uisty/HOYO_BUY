$(function(){
	
	$(".tool-li").mouseenter(function(){
		$(this).find("a").eq(0).css({ "background": "#ccc", "border-bottom": "1px solid #dfdfdf"})
		$(this).find(".tool-a").show();
	})
	
	$(".tool-li").mouseleave(function(){
		$(this).find("a").eq(0).css({ "background": "white", "border-bottom": "none"})
		$(this).find(".tool-a").hide();
	})
	
	$(".registerform").Validform({
		tiptype:2 //提示类型, 默认是1:无右侧文字提示, 2表示有右侧文字提示
	});
	
	
	/*验证码*/
	$.idcode.setCode();   //加载生成验证码方法
    $("#Txtidcode").blur(function(){
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
           $(".success").show();
		   console.log(123);
		   setTimeout(function(){
		   		$(".success").hide();
		   },1000);
        }else {
           alert("验证失败，请重新输入");
        }
    })
    $("#Txtidcode").focus(function(){
    	$(this).siblings("p").hide();
    })
    
    
    
    
	//点击注册按钮
	$("#btn").click(function(){
		
		var username = $("#username").val(); //用户名
		var pwd = $("#pwd").val(); //密码
		var repwd = $("#repwd").val(); //重复密码
		//如果是第一次存储用户,则为空数组[]
		//如果是第二次开始存储用户, 则为之前保存在cookie中的所有用户数组
		var arr = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
		
		//遍历, 判断是否已经存在即将添加的新用户
		for (var i=0; i<arr.length; i++) {
			//如果存在相同的用户名
			if (username == arr[i].username) {
				console.log("该用户名已经注册过,请重新注册!");
				return; //跳出函数, 不执行后面的代码
			}
		}
		
		//添加一个新用户
		var user = {
			username: username,
			pwd: pwd,
			repwd : repwd
		}
		arr.push(user);
		
		//保存到cookie
		$.cookie("users", JSON.stringify(arr), {expires:30, path:"/"});
		console.log( $.cookie("users") );
		
	})
	$("#btn").click(function(){
		location.href = "login.html";
	})
})
