$(function(){
	//基础url
	var baseUrl=config.get("baseUrl");
	//菜单管理
	function menuInit(){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/menuList",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				console.dir(data.data.menuList);
				
			}
		});
	}
//	menuInit();
})
