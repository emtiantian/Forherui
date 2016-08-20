$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");

	
	//菜单管理
	function menuInit(){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/menuList",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
//				console.log(data);
				console.dir(data.data.menuList);			
				$.each(data.data.menuList,function(i,ele){								
					$.each(ele,function(childI,childEle){
							var father=$("#menu_"+childEle.parent)
//							console.dir(father.find("ul>li>a"));
							father.show();
						$.each(father.find("ul>li>a"),function(childI2,childEle2){
//							console.dir(childEle2)
							//each 之后的jquery对象不再是jquery对象
//							console.log("子页面名字"+$(childEle2).html());
							$.each(childEle.child,function(childI3,childEle3){
								if($(childEle2).attr("href") == childEle3){
									$(childEle2).show();
								}
							})
						})
					});
					
				})
			}
		});
	}
	
	//错误处理
	function dataError(data){
		if(data.code == null){
			
		}else{
			alert(data.msg);
		}
	}
	//102 屏幕高减102
	
	//dataTimePiaker
	
	
	
	
	menuInit();
})
