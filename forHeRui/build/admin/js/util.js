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
					crateMenu(data);
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
		var html = '';		
		var pagename = pageName();
		$.each(data.data.menuList, function(i,ele) {
			var parentshow = "";
			var childshow = "active";
			var childHtml = "";
			$.each(ele.child, function(i2,ele2) {
				console.log("pageName"+pagename+"ele2.key"+ele2.key+"是否相等"+(pagename == ele2.key));
				console.log();
				if(pagename == ele2.key){
					childshow = "active";
					parentshow = "nav-active";					
				}else{
					childshow = ""					
				}
				childHtml += '<li class="'+childshow+'" ><a href="'+ele2.key+'">'+ele2.value+'</a></li>'
			});
			html +='<li class="menu-list '+parentshow+'"><a href="'+ele.parent.key+'"><i class="fa fa-laptop"></i> <span>'+ele.parent.value+'</span></a><ul class="sub-menu-list">'+childHtml+"</ul></li>";		
		});
		
		$(".custom-nav").html(html);
		    // Toggle Left Menu
		   jQuery('.menu-list > a').click(function() {
		      
		      var parent = jQuery(this).parent();
		      var sub = parent.find('> ul');
		      
		      if(!jQuery('body').hasClass('left-side-collapsed')) {
		         if(sub.is(':visible')) {
		            sub.slideUp(200, function(){
		               parent.removeClass('nav-active');
		               jQuery('.main-content').css({height: ''});
		               mainContentHeightAdjust();
		            });
		         } else {
		            visibleSubMenuClose();
		            parent.addClass('nav-active');
		            sub.slideDown(200, function(){
		                mainContentHeightAdjust();
		            });
		         }
		      }
		      return false;
		   });
		
		   function visibleSubMenuClose() {
		      jQuery('.menu-list').each(function() {
		         var t = jQuery(this);
		         if(t.hasClass('nav-active')) {
		            t.find('> ul').slideUp(200, function(){
		               t.removeClass('nav-active');
		            });
		         }
		      });
		   }
		
		   function mainContentHeightAdjust() {
		      // Adjust main content height
		      var docHeight = jQuery(document).height();
		      if(docHeight > jQuery('.main-content').height())
		         jQuery('.main-content').height(docHeight);
		   }   
	}
	//获取页面名称
	function pageName()
     {
         var strUrl=window.location.pathname;
         var arrUrl=strUrl.split("/");
         var strPage=arrUrl[arrUrl.length-1]; 
         return strPage;
     }
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
	