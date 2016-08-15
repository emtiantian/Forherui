$(function(){

	//基础url
	var baseUrl=config.get("baseUrl");
	//cookie 过期时间
	var expires=config.get("expires");
	console.log("baseUrl"+baseUrl+"expires"+expires);
	
	//login 
	function login(){
		var userName=$("#userName").val();
		var userPwd=$("#userPwd").val();
		console.log("userName"+userName);
		$.ajax({
			type:"post",
			url:baseUrl+"/user/login",
			async:true,
			dataType:"json",
			data:{userName:userName,userPwd:userPwd},
			success:function(data){
				console.log("data"+data);
				if(data.success){
					if(data.data.login){
						//登录成功
						location.href="index.html";
					}else{
						//登录失败
						$("#loginMsg").html("用户名或密码错误");
					}
				}else{
					console.log("error code"+data.code+"data msg"+data.msg));				
					//登录失败
					$("#loginMsg").html("用户名或密码错误");
				}				
			}		
		});
		//判断是否需要记住
		if($("#rememberMe").is(':checked')){		
			$.cookie("userName",userName,{expires:expires,path:"/"})
			$.cookie("userPwd",userPwd,{expires:expires,path:"/"})
		}else{
			$.cookie("userName",null,{expires:expires,path:"/"})
			$.cookie("userPwd",null,{expires:expires,path:"/"})		
		}	
	}
	//$.cookie(cookieName,null,{path:'/'});
	//$.cookie("userName") != "null" 这里的null 是字符串
	console.dir($.cookie("userName") != "null");
	//载入判断
	if($.cookie("userName") != "null" && $.cookie("userName") != undefined )
	{
		$("#userName").val($.cookie("userName"));
		$("#userPwd").val($.cookie("userPwd"));
		$("#rememberMe").attr("checked",true);
	}
	$("#login").on("click",function(){	
		login();
	})
})
