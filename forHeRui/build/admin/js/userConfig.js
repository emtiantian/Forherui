$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	
	$.ajax({
		type:"post",
		url:baseUrl+"/user/list",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			if(data.success){
				console.log(data.data);
				//tableInit(data);
				dataTabelInnt(data);
				
			}else{
				dataError(data);
			}
		}
	});
//	$.ajax({
//		type:"post",
//		url:baseUrl+"/accout/get",
//		async:true,
//		data:{},
//		dataType:"json",
//		success:function(data){
//			if(data.success){
//				initUserLeve(data);				
//			}else{
//				dataError(data);
//			}	
//		}
//	});
	
//	var data= {"success":true,"code":0,"msg":"","data":[{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","Wechat":{"userid":"herui","name":"何瑞","department":null,"Position":"","Gender":1,"Mobile":"15726699262","Email":"","WeixinID":"wxid_0dlzp5mo11hi22","Avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"Disable":false},"ParnetID":1},{"userId":2,"userLoginName":"test11","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0},{"userId":4,"userLoginName":"lihao","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0}]}
	function dataTabelInnt(data){
		
		$.each(data.data,function(i,ele){
			var tdHtml="";		
//			tdHtml+='<td id="userid">'+ele.userId+'</td>';
			tdHtml+='<td id="">'+(i+1)+'</td>';
			tdHtml+='<td ><input class="form-control sm" id="userLoginName" type="text" value="' + ele.userLoginName + '" /></td>';
			tdHtml+='<td ><input class="form-control sm" id="name" type="text" value="' + ele.name + '" /></td>';
			switch (ele.level){
				case "superAdmin":
				tdHtml+='<td id="level">超级管理员</td>';
					break;
				case "admin":
				tdHtml+='<td id="level">管理员</td>';
					break;
				case 'linedmimn':
				tdHtml+='<td id="level">线路管理员</td>';
					break;
				case 'user':
				tdHtml+='<td id="level">用户</td>';
					break;
				default:
					break;
			}		
			tdHtml +='<td><button id="'+ele.userId+'" class="userEdit btn btn-primary">基本信息修改</button><button id="'+ele.userId+'" class="pwdEdit btn btn-primary">重置密码</button><button id="'+ele.userId+'" class="deleteEdit btn btn-primary">删除</button></td>'
			$("#userList").append("<tr>"+tdHtml+"</tr>");
				var tdHtml2="";
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_userid" type="text" value="' + ele.Wechat.userid + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_name" type="text" value="' + ele.Wechat.name + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_department" type="text" value="' + ele.Wechat.department + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Position" type="text" value="' + ele.Wechat.Position + '" /></td>';
				switch(ele.Wechat.Gender) {
					case 1: 
						tdHtml2 += '<td > <select id="Wechat_Gender"><option value="1" selected="selected">男</option><option value="2">女</option></select></td>';
						break;
					case 2:
						tdHtml2 += '<td ><select id="Wechat_Gender" ><option value="1" >男</option><option value="2" selected="selected">女</option></select></td>';
						break;
					default:
						tdHtml2 += '<td>出错了</td>'
						break;
				}
				tdHtml2 += '<td ><input class="form-control sm"  id="Wechat_Mobile" type="text" value="' + ele.Wechat.Mobile + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Email" type="text" value="' + ele.Wechat.Email + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_WeixinID" type="text" value="' + ele.Wechat.WeixinID + '" /><span style="color:red;">必填项<span></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Avatar" type="text" value="' + ele.Wechat.Avatar + '" /></td>';
				//1=已关注，2=已冻结，4=未关注
				switch(ele.Wechat.status) {
					case 1:
						tdHtml2 += '<td ><select id="Wechat_status" disabled><option value="1" selected="selected">已关注</option><option value="2">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 2:
						tdHtml2 += '<td ><select id="Wechat_status" disabled><option value="1" >已关注</option><option value="2" selected="selected">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 4:
						tdHtml2 += '<td ><select id="Wechat_status" disabled><option value="1" >已关注</option><option value="2" >已冻结</option><option value="4" selected="selected">未关注</option></select></td>';
						break;
					default:
						tdHtml2 += '<td>出错了</td>'
						break;
				}
	
				tdHtml2 += '<td id="Wechat_extattr" >' + ele.Wechat.extattr + '</td>';
				switch(ele.Wechat.Disable) {
					case true:
						tdHtml2 += '<td ><select id="Wechat_Disable" disabled><option value="true" selected="selected">已禁用</option><option value="false">未禁用</option></select></td>';
						break;
					case false:
						tdHtml2 += '<td ><select id="Wechat_Disable" disabled><option value="true" >已禁用</option><option value="false" selected="selected">未禁用</option></select></td>';
						break;
					default:
						break;
				}	
				tdHtml2 +='<td><button id="'+ele.userId+'" class="weChatEdit btn btn-primary">微信信息修改</button></td>'
			$("#userWeChatList").append("<tr>"+tdHtml2+"</tr>");
			
		})
		$('#userTable').dataTable( {
        "aaSorting": [[ 0, "asc" ]]
    	});
    	$('#userWecatTable').dataTable( {
        "aaSorting": [[ 0, "asc" ]]
    	});
	}
	//初始化可选等级
	function initUserLeve(accoutData){
		var tdHtml="";
			switch (accoutData.level){
				case "superAdmin":			
				tdHtml+='<option value="admin">管理员</option>';
				tdHtml+='<option value="linedmimn">线路管理员</option>';
				tdHtml+='<option value="user">用户</option>';
					break;
				case "admin":
					tdHtml+='<option value="linedmimn">线路管理员</option>';
				tdHtml+='<option value="user">用户</option>';
				
					break;
				case 'linedmimn':
				tdHtml+='<option value="user">用户</option>';
					break;
				case 'user':			
				
					break;
				default:
					break;
			}
			userLevel.append(tdHtml);
	}
	//删除用户
	function deleteUser(userId){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/delete",
			async:true,
			data:{"userID":userId},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("删除成功 3秒后刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
			
		});
	}
//	重置密码
	function resetPwdUser(userId){
			$.ajax({
			type:"post",
			url:baseUrl+"/user/ResetPwd",
			async:true,
			data:{"userID":userId},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("密码重置成功 3秒后刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
			
		});
	}
	//修改基本用户信息
	function userEdit(userId,userLoginName,name){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/Edit",
			async:true,
			data:{"userID":userId,"userLoginName":userLoginName,"name":name},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("修改成功 3秒后刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
			
		});
	}
	
	function weChatEdit(userId,userid,name,department,position,mobile,gender,email,weixinid,avatar,extattr){
		$.ajax({
			type:"post",
			url:baseUrl+"/wechat/user/Edit",
			async:true,
			data:{"user":userId,"userid":userid,"name":name,"department":department,"position":position,"mobile":mobile,"gender":gender,"email":email,"weixinid":weixinid,"avatar":avatar,"extattr":extattr},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("删除成功 3秒后刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
			
		});
	}
	
	$(document).on("click",".deleteEdit",function(){
		deleteUser($(this).attr("id"));
	})
	$(document).on("click",".pwdEdit",function(){
		resetPwdUser($(this).attr("id"));
	})
	$(document).on("click",".userEdit",function(){
		console.log("点击了");
		console.dir($(this).parent().find("#userLoginName"));
		userEdit($(this).attr("id"),$(this).parent().parent().find("#userLoginName").val(),$(this).parent().parent().find("#name").val());
	})
	$(document).on("click",".weChatEdit",function(){
		var userId = $(this).attr("id")
		,userid = $(this).parent().parent().find("#Wechat_userid").val()
		,name = $(this).parent().parent().find("#Wechat_name").val()
		,department = $(this).parent().parent().find("#Wechat_department").val()
		,position = $(this).parent().parent().find("#Wechat_Position").val()
		,mobile = $(this).parent().parent().find("#Wechat_Mobile").val()
		,gender = $(this).parent().parent().find("#Wechat_Gender").val()
		,email = $(this).parent().parent().find("#Wechat_Email").val()
		,weixinid = $(this).parent().parent().find("#Wechat_WeixinID").val()
		,avatar = $(this).parent().parent().find("#Wechat_Avatar").val()
		,extattr  = $(this).parent().parent().find("#Wechat_extattr").val()
		
		weChatEdit(userId,userid,name,department,position,mobile,gender,email,weixinid,avatar,extattr);
	})
//	dataTabelInnt(data);
})
