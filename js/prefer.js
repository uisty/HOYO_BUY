$(function(){
	
	
	
	function preferLunbo() {
		var list = $(".preferenceContent-list");
		var li = $(".preferenceContent-list li");
		li.first().clone().appendTo(list);
		var size = $(".preferenceContent-list li").length;
		console.log(size);
		var  i =0;
		
		//开始定时器
		var preferTimer = setInterval(function(){
			
			i++;
			move();
			
		},2000);
		
		
			
		function move() {
		
			if(i<0) {
				list.css("left" , -(size-1)*1150);
				i = size - 2;
			}
			
			
			if(i>=size) {
				//瞬间变成第一张
				list.css({"left":0});
				//i变成1
				i = 1;
			}
			//开始移动
			list.stop().animate({"left" : -i*1150},600);	
		}
	
		
		
		
		//上一页
		$(".prev1").click(function(){
			
			i++;
			move();
			
		})
		//下一页
		$(".next1").click(function(){
			
			i--;
			move();
			
		})
		
		$(".preferenceContent").mouseenter(function(){
			clearInterval(preferTimer);
		})
		$(".preferenceContent").mouseleave(function(){
			preferTimer = setInterval(function(){
				i++;
				move();
			},2000);
		})
	}
	preferLunbo();
})