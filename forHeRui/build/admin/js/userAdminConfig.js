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
//	//初始化线路管理员
//	$.ajax({
//		type:"post",
//		url:baseUrl+"/user/ListByLevel",
//		async:true,
//		data:{"level":"lineAdmin"},
//		dataType:"json",
//		success:function(data){
//			if(data.success){				
//				$("#parnetId")			
//			}else{
//				dataError(data);
//			}	
//		}
//	});
	
//	var data= {"success":true,"code":0,"msg":"","data":[{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","Wechat":{"userid":"herui","name":"何瑞","department":null,"Position":"","Gender":1,"Mobile":"15726699262","Email":"","WeixinID":"wxid_0dlzp5mo11hi22","Avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"Disable":false},"ParnetID":1},{"userId":2,"userLoginName":"test11","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0},{"userId":4,"userLoginName":"lihao","name":"黎浩","level":"admin","Wechat":{"userid":"","name":"","department":null,"Position":"","Gender":1,"Mobile":"","Email":"","WeixinID":"","Avatar":"","status":4,"extattr":null,"Disable":false},"ParnetID":0}]}
	function dataTabelInnt(data){
		
		$.each(data.data,function(i,ele){
			var tdHtml="";		
//			tdHtml+='<td id="userid">'+i+'</td>';
			tdHtml+='<td >' + ele.userLoginName + '</td>';
//			tdHtml+='<td ><input class="form-control sm" id="name" type="text" value="' + ele.name + '" /></td>';
			tdHtml+='<td >' + ele.name + '</td>';
			switch (ele.level){
				case "superAdmin":
				tdHtml+='<td id="level">超级管理员</td>';
					break;
				case "admin":
				tdHtml+='<td id="level">管理员</td>';
					break;
				case 'lineAdmin':
				tdHtml+='<td id="level">线路管理员</td>';
					break;
				case 'user':
				tdHtml+='<td id="level">用户</td>';
					break;
				default:
					break;
			}	
			switch(ele.wechat.status) {
					case 1:
						tdHtml += '<td ><select id="Wechat_status" class="form-control" disabled><option value="1" selected="selected">已关注</option><option value="2">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 2:
						tdHtml += '<td ><select id="Wechat_status" class="form-control" disabled><option value="1" >已关注</option><option value="2" selected="selected">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 4:
						tdHtml += '<td ><select id="Wechat_status" class="form-control"  disabled><option value="1" >已关注</option><option value="2" >已冻结</option><option value="4" selected="selected">未关注</option></select></td>';
						break;
					default:
						tdHtml += '<td>出错了</td>'
						break;
				}
			tdHtml += '<td >' + ele.wechat.mobile + '</td>';
			tdHtml += '<td >' + ele.wechat.email + '</td>';
			tdHtml += '<td >' + ele.wechat.weixinId + '</td>';
//			tdHtml +=
//			'<td><button id="'+ele.userId+'" class="userEdit btn btn-primary" userLoginName="'+ele.userLoginName+'" name="'+ele.name+'" userId="'+ele.userId+'" >基本信息修改</button>'+
//			'<button id="'+ele.userId+'" class="pwdEdit btn btn-primary">重置密码</button>'+
//			'<button id="'+ele.userId+'" class="weChatDelete btn btn-primary">微信解除绑定</button>'+ // 
//			'<button id="'+ele.userId+'" class="weChatEdit btn btn-primary" name="'+ele.name+'"Wechat_userid="'+ele.wechat.userId+'" Wechat_Mobile="'+ele.wechat.mobile+'" Wechat_Email="'+ele.wechat.email+'" Wechat_WeixinID="'+ele.wechat.weixinId+'" Wechat_Gender = "'+ele.wechat.gender+'">微信信息修改</button>'+ 
//			'<button id="'+ele.userId+'" class="create btn btn-primary">创建用户</button>'+
//			'<button id="'+ele.userId+'" class="deleteEdit btn btn-primary">删除</button></td>'
			tdHtml +='<td><span id="'+ele.userId+'" class="showother" style="width:20px;cursor: pointer;margin-right: 20px;" userLoginName="'+ele.userLoginName+'" name="'+ele.name+'" userId="'+ele.userId+'" "Wechat_userid="'+ele.wechat.userId+'" Wechat_Mobile="'+ele.wechat.mobile+'" Wechat_Email="'+ele.wechat.email+'" Wechat_WeixinID="'+ele.wechat.weixinId+'" Wechat_Gender = "'+ele.wechat.gender+'"><img src="./images/edit_32px.png"></span>'+
			'<span id="'+ele.userId+'" class="deleteEdit" style="width:20px;cursor: pointer;"><img src="./images/delete_32px.png" ></span></td>'
			$("#userList").append("<tr>"+tdHtml+"</tr>");
			
				var tdHtml2="";
//				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_userid" type="text" value="' + ele.wechat.userid + '" /></td>';
//				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_name" type="text" value="' + ele.wechat.name + '" /></td>';
//				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_department" type="text" value="' + ele.wechat.department + '" /></td>';
//				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Position" type="text" value="' + ele.wechat.position + '" /></td>';
				tdHtml2 +='<td > '+ele.name+'</td>';
				switch(ele.wechat.gender) {
					case 1: 
						tdHtml2 += '<td > <select id="Wechat_Gender" class="form-control"><option value="1" selected="selected">男</option><option value="2">女</option></select></td>';
						break;
					case 2:
						tdHtml2 += '<td ><select id="Wechat_Gender" class="form-control"><option value="1" >男</option><option value="2" selected="selected">女</option></select></td>';
						break;
					default:
						tdHtml2 += '<td>出错了</td>'
						break;
				}
				tdHtml2 += '<td ><input class="form-control sm"  id="Wechat_Mobile" type="text" value="' + ele.wechat.mobile + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Email" type="text" value="' + ele.wechat.email + '" /></td>';
				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_WeixinID" type="text" value="' + ele.wechat.weixinId + '" /></td>';
//				tdHtml2 += '<td ><input class="form-control sm" id="Wechat_Avatar" type="text" value="' + ele.wechat.avatar + '" /></td>';
				//1=已关注，2=已冻结，4=未关注
				switch(ele.wechat.status) {
					case 1:
						tdHtml2 += '<td ><select id="Wechat_status" class="form-control" disabled><option value="1" selected="selected">已关注</option><option value="2">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 2:
						tdHtml2 += '<td ><select id="Wechat_status" class="form-control" disabled><option value="1" >已关注</option><option value="2" selected="selected">已冻结</option><option value="4">未关注</option></select></td>';
						break;
					case 4:
						tdHtml2 += '<td ><select id="Wechat_status" class="form-control"  disabled><option value="1" >已关注</option><option value="2" >已冻结</option><option value="4" selected="selected">未关注</option></select></td>';
						break;
					default:
						tdHtml2 += '<td>出错了</td>'
						break;
				}
//	
//				tdHtml2 += '<td id="Wechat_extattr" >' + ele.wechat.extattr + '</td>';
//				switch(ele.wechat.disable) {
//					case true:
//						tdHtml2 += '<td ><select id="Wechat_Disable" disabled><option value="true" selected="selected">已禁用</option><option value="false">未禁用</option></select></td>';
//						break;
//					case false:
//						tdHtml2 += '<td ><select id="Wechat_Disable" disabled><option value="true" >已禁用</option><option value="false" selected="selected">未禁用</option></select></td>';
//						break;
//					default:
//						break;
//				}	
				tdHtml2 +='<td><button id="'+ele.userId+'" class="weChatEdit btn btn-primary">微信信息修改</button><button id="'+ele.userId+'" class="weChatDelete btn btn-primary">微信解除绑定</button></td>'
			$("#userWeChatList").append("<tr>"+tdHtml2+"</tr>");
			
		})
		$('#userTable').dataTable( {
        "aaSorting": [[ 0, "asc" ]],
        "bLengthChange":false,  
        "bFilter": false,
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
        "aaSorting": [[ 0, "asc" ]],
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
				tdHtml+='<option value="lineAdmin">线路管理员</option>';
				tdHtml+='<option value="user">用户</option>';
					break;
				case "admin":
					tdHtml+='<option value="lineAdmin">线路管理员</option>';
				tdHtml+='<option value="user">用户</option>';
				
					break;
				case 'lineAdmin':
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
		if(window.confirm('你确定要删除吗？')){
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
			return true;
		}else{
			return false;
		}
		
	}
//	重置密码
	function resetPwdUser(userId){
		if(window.confirm('你确定要重置密码吗？')){
                 $.ajax({
					type:"post",
					url:baseUrl+"/user/ResetPwd",
					async:true,
					data:{"userId":userId},
					dataType:"json",
					success:function(data){
						if(data.success){
							alert("重置成功 3秒后刷新页面");
							setTimeout(function(){
								location.reload();
							},3000);
						}else{
							dataError(data);
						}
					}
					
				});
                 return true;
              }else{
                 //alert("取消");
                 return false;
             }
			
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
	//微信修改
	function weChatEdit(userId,userid,name,department,position,mobile,gender,email,weixinid,avatar,extattr){
		if(mobile == "" && email == "" && weixinid == "" ){
			alert("电话号，邮箱，微信id不能同时为空");
			return;
		}
		$.ajax({
			type:"post",
			url:baseUrl+"/wechat/user/Edit",
			async:true,
			data:{"user":userId,"userid":userid,"name":name,"department":department,"position":position,"mobile":mobile,"gender":gender,"email":email,"weixinid":weixinid,"avatar":avatar,"extattr":extattr},
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
//	{"userLoginName":"lihao","name":"黎浩","level":"2"}
	//创建用户
	//{"user":"0","userid":"111","name":"dd","department":"1","position":"工程师","mobile":"15726699265","gender":"1","email":"herui13@126.com","weixinid":"","avatar":"","extattr":""}
	function createUser(userLoginName,name,level,parnetId,weChatGender,weChaTel,weChatEmial,weChatId ){	
		$.ajax({
			type:"post",
			url:baseUrl+"/user/create",
			async:true,
			data:{"userLoginName":userLoginName,"name":name,"level":level,"parnetId":parnetId},
			dataType:"json",
			success:function(data){
				if(data.success){
//					alert("创建成功 3秒后刷新页面");
//					setTimeout(function(){
//						location.reload();
//					},3000);
					$.ajax({
						type:"post",
						url:baseUrl+"/wechat/user/create",
						async:true,
						dataType:"json",
						data:{"user":data.data.userId,"mobile":weChaTel,"gender":weChatGender,"email":weChatEmial,"weixinid":weChatId},
						success:function(){
							alert("创建成功 3秒后刷新页面");
							setTimeout(function(){
								location.reload();
							},3000);
						}
					});
				}else{
					dataError(data);
				}
			}
			
		});
	}
	//{"success":true,"code":0,"msg":"","data":[{"userId":1,"userLoginName":"admin","name":"何瑞","level":"superAdmin","wechat":{"userId":"herui","name":"何瑞","department":null,"position":"","gender":1,"mobile":"15726699262","email":"","weixinId":"wxid_0dlzp5mo11hi22","avatar":"http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/","status":1,"extattr":null,"disable":false},"parnetId":0}]}
	//初始化线路管理员
	function initLineAdmin(userLevel){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/ListByLevel",
			async:true,
			data:{"level":userLevel},
			dataType:"json",
			success:function(data){
				var html="";
				$.each(data.data, function(i,ele) {
					if(i == 0){
						//第一个默认选中
						html+='<option value="'+ele.userId+'" selected="selected" >'+ele.name+'</option>'
					}else{
						html+='<option value="'+ele.userId+'">'+ele.name+'</option>'
					}
					
				});
				$("#parnetId").append(html);
			}
		});
	}
	//微信解绑
	function weChatDelete(userId){
		if(window.confirm('你确定要解绑微信吗？')){
			$.ajax({
				type:"post",
				url:baseUrl+"/wechat/user/delete",
				async:true,
				dataType:"json",
				data:{"userId":userId},
				success:function(data){
					if(data.success){
						alert("解除绑定成功 3秒后刷新页面");
						setTimeout(function(){
							location.reload();
						},3000);
					}else{
						dataError(data);
					}
				}
			});
			return true;
		}else{
			return false;
		}		
	}
	//切换显示
	function changeShow(id){
		$(".wrapper").find(".myrow").hide();
		$(".wrapper").find(".myrow").each(function(i,ele){
			if($.type(id)== "array"){
				$.each(id, function(i2,ele2) {
					if($(ele).attr("id") == ele2 ){
						$(ele).show();
					}
				});
			}else{
				if($(ele).attr("id") == id ){
						$(ele).show();
				}
			}
		})
	}
	//返回控制
	$('.fanhui').on("click",function(){
		changeShow("main");
	});
	//创建用户显示
	$(document).on("click",".create",function(){
		changeShow("createUserDiv");
	})
	$(document).on("click",".deleteEdit",function(){
		deleteUser($(this).attr("id"));
	})
	$(document).on("click","#pwdEdit",function(){
		resetPwdUser($(this).parent().parent().find("#editUserId").val());
	})
	$(document).on("click",".userEdit",function(e){	
		changeShow("editDiv");
		var buttonele = $(e.target);
	
		$("#editDiv").find("#editUserName").val(buttonele.attr("name"));
		$("#editDiv").find("#editUserLoginName").val(buttonele.attr("userLoginName"));
		$("#editDiv").find("#editUserId").val(buttonele.attr("userId"));
//		userEdit($(this).attr("id"),$(this).parent().parent().find("#userLoginName").val(),$(this).parent().parent().find("#name").val());
	})
	
	$(document).on("click",".showother",function(e){
//		changeShow("createUserDiv");
//		changeShow("editDiv");
//		changeShow("weixinEditDiv");
		
		changeShow(["editDiv","weixinEditDiv"]);
		var buttonele = $(e.target);
		
		$("#editDiv").find("#editUserName").val(buttonele.attr("name"));
		$("#editDiv").find("#editUserLoginName").val(buttonele.attr("userLoginName"));
		$("#editDiv").find("#editUserId").val(buttonele.attr("userId"));
		
		$("#weixinEditDiv").find("#editUserName").val(buttonele.attr("name"));
		//性别
		$("#weixinEditDiv").find("#Wechat_Gender").val(buttonele.attr("Wechat_Gender"));
		
		$("#weixinEditDiv").find("#editUserId").val(buttonele.attr("id"));
		$("#weixinEditDiv").find("#Wechat_Mobile").val(buttonele.attr("Wechat_Mobile"));
		$("#weixinEditDiv").find("#Wechat_Email").val(buttonele.attr("Wechat_Email"));
		$("#weixinEditDiv").find("#Wechat_WeixinID").val(buttonele.attr("Wechat_WeixinID"));
		$("#weixinEditDiv").find("#Wechat_userid").val(buttonele.attr("Wechat_userid"));
	})
	
	$(document).on("click",".weChatEdit",function(e){
		changeShow("weixinEditDiv");
		var buttonele = $(e.target);
		$("#weixinEditDiv").find("#editUserName").val(buttonele.attr("name"));
		//性别
		$("#weixinEditDiv").find("#Wechat_Gender").val(buttonele.attr("Wechat_Gender"));
		
		$("#weixinEditDiv").find("#editUserId").val(buttonele.attr("id"));
		$("#weixinEditDiv").find("#Wechat_Mobile").val(buttonele.attr("Wechat_Mobile"));
		$("#weixinEditDiv").find("#Wechat_Email").val(buttonele.attr("Wechat_Email"));
		$("#weixinEditDiv").find("#Wechat_WeixinID").val(buttonele.attr("Wechat_WeixinID"));
		$("#weixinEditDiv").find("#Wechat_userid").val(buttonele.attr("Wechat_userid"));
		
//		var userId = $(this).attr("id")
//		,userid = $(this).parent().parent().find("#Wechat_userid").val()
//		,name = $(this).parent().parent().find("#Wechat_name").val()
//		,department = $(this).parent().parent().find("#Wechat_department").val()
//		,position = $(this).parent().parent().find("#Wechat_Position").val()
//		,mobile = $(this).parent().parent().find("#Wechat_Mobile").val()
//		,gender = $(this).parent().parent().find("#Wechat_Gender").val()
//		,email = $(this).parent().parent().find("#Wechat_Email").val()
//		,weixinid = $(this).parent().parent().find("#Wechat_WeixinID").val()
//		,avatar = $(this).parent().parent().find("#Wechat_Avatar").val()
//		,extattr  = $(this).parent().parent().find("#Wechat_extattr").val()
		


//		weChatEdit(userId,userid,name,department,position,mobile,gender,email,weixinid,avatar,extattr);
	})
	$("#weChatEdit").on("click",function(){
		var userId = $(this).parent().parent().find("#editUserId").val()
		,userid = $(this).parent().parent().find("#Wechat_userid").val()
		,name = $(this).parent().parent().find("#editUserName").val()
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
	$("#userEdit").on("click",function(){
		userEdit($(this).parent().parent().find("#editUserId").val(),$(this).parent().parent().find("#editUserLoginName").val(),$(this).parent().parent().find("#editUserName").val());
	})
	$("#createUser").on("click",function(){
		var userLoginName = $(this).parent().parent().find("#createUserloginName").val();
		var name = $(this).parent().parent().find("#createUserName").val();
		var level = $(this).parent().parent().find("#userLevel").val();
		var parnetId = $(this).parent().parent().find("#parnetId").val();
		var weChatGender = $(this).parent().parent().find("#weChatGender").val();
		var weChaTel = $(this).parent().parent().find("#weChaTel").val();
		var weChatEmial = $(this).parent().parent().find("#weChatEmial").val();
		var weChatId = $(this).parent().parent().find("#weChatId").val();
		createUser(userLoginName,name,level,parnetId,weChatGender,weChaTel,weChatEmial,weChatId)
	})
	$(".crateUser").on("click",function(){
		changeShow("createUserDiv");
	})
	$(document).on("click","#weChatDelete",function(){
		weChatDelete($(this).parent().parent().find("#editUserId").val());
	})
	initLineAdmin("lineAdmin");
//	dataTabelInnt(data);
})
