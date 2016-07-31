$(function(){
	//接口示例

	//1登录
		var ip="http://localhost/"
		var url="user/login"
	//传入参数：	
		var username="何瑞"
		var userpwd="123456"
	//请求方式
	$.ajax({
		type:"post",
		url:ip+url,
		async:true,
		data:{"username":username,"userpwd",userpwd},
		function(data){
			if(data.success){
				if(data.data.login){
					//获取权限
					var level=data.level;
					window.top.location="index.html";
				}
			}else{
				consol.log("错误码"+data.code)
				alert(data.msg)
			}
		}
	});
	//返回data示例
	var data={"success":true,"code":0,"msg":"","data":{"login":true,"level":"admin"}};
	
	//1获取菜单列表
		var ip="http://localhost/"
		var url="user/menuList"
	//传入参数：空
	
	//请求方式
	$.ajax({
		type:"post",
		url:ip+url,
		async:true,
		data:{}
		function(data){
			if(data.success){
				if(data.data){
					//获得菜单列表
					//根据对应的用户等级展示对应菜单
					
				}
			}else{
				consol.log("错误码"+data.code)
				alert(data.msg)
			}
		}
	});
	//返回data示例
	var data={"success":true,"code":0,"msg":"","data":{"superAdmin":{},"admin":{},"user":{}}};
	
	
})
