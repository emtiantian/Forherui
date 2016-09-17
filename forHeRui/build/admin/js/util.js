$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	var  pwd = config.get("pwd");
	//菜单管理
	function menuInit(){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/menuList",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				if(data.success){
					$.each(data.data,function(i,ele){								
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
				$(".wrapper").show();
				}else{
					//在初始化menu的时候 判断是否登录
					if(data.code == 2){
						alert("未登录！请重新登录")
						location.href='login.html';
					}else{
						alert(data.msg);
					}
				}
				
			}
		});
	}
	function crateMenu(data){
//		<li class="menu-list nav-active" id="menu_index" style="display: none;"><a href="index.html"><i class="fa fa-laptop"></i> <span>监测信息查询</span></a>
//              	<ul class="sub-menu-list">
//                      <li class="active" >
//                      	<a href="index.html" style="display: none;"> 线路监控</a>
//                      </li>                  
//                      <li>
//                      	<a href="userMachine.html" style="display: none;">设备列表</a>
//                      </li>
//                      <li>
//                      	<a href="chartPicture.html" style="display: none;"> 图片统计信息</a>
//                      </li>                          
//                  </ul>
//              </li>
	var html = '';
	$.each(data, function(i,ele) {
		
	});
                
	}
	//获取页面名称
	function pageName()
     {
         var strUrl=location.href;
         var arrUrl=strUrl.split("/");
         var strPage=arrUrl[arrUrl.length-1];
         return strPage;
     }
	//{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","wechat":{"userId":"herui","name":"何瑞","department":null,"position":"","gender":1,"mobile":"15726699262","email":"","weixinId":"wxid_0dlzp5mo11hi22","avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"disable":false},"ParnetID":1}}
	//用户初始化
	function userInit(){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/get",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				if(data.success){						
					$("#userName").html(data.data.name+"（"+data.data.level+"）");
					$("#userImg").attr("src",data.data.wechat.avatar);
					//添加当前用户等级
					$("body").append('<input type="hidden" id="loginUserLevel" value="'+data.data.level+'" />')
					$("body").append('<input type="hidden" id="loginUserId" value="'+data.data.userId+'" />')
					//
					$("#createPwd").val(pwd);
					switch (data.data.level){
						case "superAdmin":
							$("#userLevel").append("<option value='user' selected='selected'>用户</option>")
							$("#userLevel").append("<option value='lineAdmin'>线路管理员</option>")
							$("#userLevel").append("<option value='admin'>管理员</option>")
							$("#userLineAdmin").show();
							break;
						case "admin":
							$("#userLevel").append("<option value='user' selected='selected'>用户</option>")
							$("#userLevel").append("<option value='lineAdmin'>线路管理员</option>")						
							$("#userLineAdmin").show();
							break;
						case "lineAdmin":
							$("#userLevel").append("<option value='user' selected='selected'>用户</option>")					
							$("#userLineAdmin").hide();
							break;	
						default:
							$("#userLevel").append("<option value=>出错了</option>")					
							$("#userLineAdmin").hide();
							break;							
					}								
				}else{
					dataError(data);
				}				
			}
		});
	}
	//logout
	function loginOut(){
		$.ajax({
			type:"post",
			url:baseUrl+"/account/logout",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				if(data.success){
					location.href="login.html";
				}else{
					dataError(data);
				}
			}
		});
	}
	
	//错误处理
//	function dataError(data){
//		if(data.code == 2){
////			alert("未登录！请重新登录")
//			location.href='login.html';
//		}else{
//			alert(data.msg);
//		}
//	}
	//102 屏幕高减102	
	function initHeight(){
		$(".wrapper").css("min-height",$(window).height()-102);
	}
	//判断是否为手机
	
	
	
	
	
	initHeight();
	menuInit();
	userInit();
	
	$("#logout").on("click",function(){
		loginOut();
	})
})
//错误处理
	function dataError(data){
		if(data.code == 2){
//			alert("未登录！请重新登录")
			location.href='login.html';
		}else{
			alert(data.msg);
		}
	}
	