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
	//初始化线路管理员
	$.ajax({
		type:"post",
		url:baseUrl+"/user/ListByLevel",
		async:true,
		data:{"level":"lineAdmin"},
		dataType:"json",
		success:function(data){
			if(data.success){				
				$("#parnetId")			
			}else{
				dataError(data);
			}	
		}
	});
	
//	var data= {"success":true,"code":0,"msg":"","data":[{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","Wechat":{"userid":"herui","name":"何瑞","department":null,"Position":"","Gender":1,"Mobile":"15726699262","Email":"","WeixinID":"wxid_0dlzp5mo11hi22","Avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"Disable":false},"ParnetID":1},{"userId":2,"userLoginName":"test11","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0},{"userId":4,"userLoginName":"lihao","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0}]}
	function dataTabelInnt(data){
		
		$.each(data.data,function(i,ele){
			var tdHtml="";		
			tdHtml+='<td id="userid">'+ele.userId+'</td>';
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
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_userid" type="text" value="' + ele.wechat.userid + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_name" type="text" value="' + ele.wechat.name + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_department" type="text" value="' + ele.wechat.department + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Position" type="text" value="' + ele.wechat.position + '" /></td>';
				switch(ele.wechat.gender) {
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
				tdHtml2 += '<td ><input class="form-control sm"  id="Wechat_Mobile" type="text" value="' + ele.wechat.mobile + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Email" type="text" value="' + ele.wechat.email + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_WeixinID" type="text" value="' + ele.wechat.weixinId + '" /><span style="color:red;">必填项<span></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Avatar" type="text" value="' + ele.wechat.avatar + '" /></td>';
				//1=已关注，2=已冻结，4=未关注
				switch(ele.wechat.status) {
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
	
				tdHtml2 += '<td id="Wechat_extattr" >' + ele.wechat.extattr + '</td>';
				switch(ele.wechat.disable) {
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
        "aaSorting": [[ 0, "desc" ]],
        "oLanguage" : {
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "抱歉， 没有找到",
                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                "sInfoEmpty": "没有数据",
                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                "sZeroRecords": "没有检索到数据",
                 "sSearch": "名称:",
                "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
                }
               }
    	});
    	$('#userWecatTable').dataTable( {
        "aaSorting": [[ 0, "desc" ]],
        "oLanguage" : {
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "抱歉， 没有找到",
                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                "sInfoEmpty": "没有数据",
                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                "sZeroRecords": "没有检索到数据",
                 "sSearch": "名称:",
                "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
                }
               }
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
			data:{"userId":userId},
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
			data:{"userId":userId},
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
	//修改基本用户信息
	function userEdit(userId,userLoginName,name){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/Edit",
			async:true,
			data:{"userId":userId,"userLoginName":userLoginName,"name":name},
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
//	{"userLoginName":"lihao","name":"黎浩","level":"2"}

	function createUser(userLoginName,name,level,parnetId ){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/create",
			async:true,
			data:{"userLoginName":userLoginName,"name":name,"level":level,"parnetId":parnetId},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("创建成功 3秒后刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
			
		});
	}
	//{"success":true,"code":0,"msg":"","data":[{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","wechat":{"userId":"herui","name":"何瑞","department":null,"position":"","gender":1,"mobile":"15726699262","email":"","weixinId":"wxid_0dlzp5mo11hi22","avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"disable":false},"parnetId":0}]}
	function initLineAdmin(userLevel){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/ListByLevel",
			async:true,
			data:{"level":userLevel},
			dataType:"json",
			success:function(data){
				$.each(data.data, function(i,ele) {
					
				});
				$("#parnetId").append();
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
	$("#createUser").on("click",function(){
		var userLoginName = $("#userLoginName")
		var name = $("#userName")
		var level = $("#userLevel")
		var parnetId = $("#parnetId")
		
		createUser(userLoginName,name,level,parnetId)
	})
//	dataTabelInnt(data);
})
