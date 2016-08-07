$(function(){
	var baseUrl="http://127.0.0.1:3000"
	//cookie 过期时间
	var expires=7;
	//cookie 名字
	var cookieName="loginName"
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
					console.log("error code"+data.code);
					alert(data.msg);				
				}				
			}		
		});
		//判断是否需要记住
		if($("#rememberMe").is(':checked')){		
			$.cookie(cookieName,{"userName":userName,"userPwd":userPwd},{expires:expires,path:"/"})
		}else{
			$.cookie(cookieName,null);
		}	
	}
	
	//载入判断
	if($.cookie(cookieName)!=null)
	{
		$("#userName").val($.cookie(cookieName).userName);
		$("#userPwd").val($.cookie(cookieName).userPwd);
		$("#rememberMe").attr("checked",true);
	}
	$("#login").on("click",function(){	
		login();
	})
})
