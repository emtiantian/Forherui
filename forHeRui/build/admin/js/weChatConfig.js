$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	
	$.ajax({
		type:"post",
		url:baseUrl+"/wechat/user/list",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			if(data.success){
				console.log(data.data);
				tableInit(data);
			}else{
				dataError(data);
			}
		}
	});
	function tableInit(data){
		var tdHtml="";
		var ele=data.data;
//		$.each(data.data.userlist, function(i,ele) {
			
//			tdHtml+='<td id="userid">'+ele.userid+'</td>';
//			tdHtml+='<td id="userLoginName">'+ele.userLoginName+'</td>';
//			tdHtml+='<td id="name">'+ele.name+'</td>';
			
//			switch (ele.level){
//				case 1:
//				tdHtml+='<td id="level">超级管理员</td>';
//					break;
//				case 2:
//				tdHtml+='<td id="level">管理员</td>';
//					break;
//				case 3:
//				tdHtml+='<td id="level">线路管理员</td>';
//					break;
//				case 4:
//				tdHtml+='<td id="level">用户</td>';
//					break;
//				default:
//					break;
//			}						
			
		
			tdHtml += '<td ><input class="form-control" id="Wechat_userid" type="text" value="' + ele.userid + '" /></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_name" type="text" value="' + ele.name + '" /></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_department" type="text" value="' + ele.department + '" disabled/></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_Position" type="text" value="' + ele.position + '" disabled/></td>';
			switch(ele.gender) {
				case "1": 
					tdHtml += '<td > <select id="Wechat_Gender" class="form-control" style="width:100px;"><option value="1" selected="selected">男</option><option value="2">女</option></select></td>';
					break;
				case "2":
					tdHtml += '<td ><select id="Wechat_Gender" ><option value="1" >男</option><option value="2" selected="selected">女</option></select></td>';
					break;
				default:
					tdHtml += '<td>出错了</td>'
					break;
			}
			tdHtml += '<td ><input class="form-control" id="Wechat_Mobile" type="text" value="' + ele.mobile + '" /></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_Email" type="text" value="' + ele.email + '" /></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_WeixinID" type="text" value="' + ele.weixinid + '" /><span style="color:red;">必填项<span></td>';
			tdHtml += '<td ><input class="form-control" id="Wechat_Avatar" type="text" value="' + ele.avatar + '" /></td>';
			//1=已关注，2=已冻结，4=未关注
//			switch(ele.status) {
//				case 1:
//					tdHtml += '<td ><select id="Wechat_status" disabled><option value="1" selected="selected">已关注</option><option value="2">已冻结</option><option value="4">未关注</option></select></td>';
//					break;
//				case 2:
//					tdHtml += '<td ><select id="Wechat_status" disabled><option value="1" >已关注</option><option value="2" selected="selected">已冻结</option><option value="4">未关注</option></select></td>';
//					break;
//				case 4:
//					tdHtml += '<td ><select id="Wechat_status" disabled><option value="1" >已关注</option><option value="2" >已冻结</option><option value="4" selected="selected">未关注</option></select></td>';
//					break;
//				default:
//					tdHtml += '<td>出错了</td>'
//					break;
//			}

			tdHtml += '<td id="Wechat_extattr" >' + ele.extattr + '</td>';
//			switch(ele.Disable) {
//				case true:
//					tdHtml += '<td ><select id="Wechat_Disable" disabled><option value="true" selected="selected">已禁用</option><option value="false">未禁用</option></select></td>';
//					break;
//				case false:
//					tdHtml += '<td ><select id="Wechat_Disable" disabled><option value="true" >已禁用</option><option value="false" selected="selected">未禁用</option></select></td>';
//					break;
//				default:
//					break;
//			}						
		
			
//		});
		$("#userWechat").append("<tr>"+tdHtml+"</tr>")
	}
	function save(){
		$.ajax({
			type:"post",
			url:baseUrl+"/wechat/user/Edit",
			async:true,
			dataType:"json",
			data:{
				"user": "0",
				"userid": $("#Wechat_userid").val(),
				"name": $("#Wechat_name").val(),
				"department": $("#Wechat_department").val(),
				"position": $("#Wechat_Position").val(),
				"mobile": $("#Wechat_Mobile").val(),
				"gender": $("#Wechat_Gender").val(),
				"email": $("#Wechat_Email").val(),
				"weixinid": $("#Wechat_WeixinID").val(),
				"avatar_mediaid": $("#Wechat_Avatar").val(),
				"extattr": $("#Wechat_extattr").val()
			},
			success:function(data){
				if(data.success){
					alert("修改成功 3秒后刷新本页");
					setTimeout(function(){
						window.location.reload();
					},3000);
					
				}else{
					dataError(data);
				}
			}
		});
	}
	//响应
	$("#userWechatSave").on("click",function(){
		save();
	})
	
})
