$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	function initEditPwd(){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/list",
			async:true,
			dataType:"json",
			data:{},
			success:function(data){
				if(data.success){
					$("#userNameEdit").val(data.data[0].name);
					console.log("name"+data.data[0].name);
					$("#userId").val(data.data[0].userId);
				}else{
					dataError(data);
				}
			}
		});
	}
	
	function editPwd(){
		//{"userID":"2","oldPass":"e10adc3949ba59abbe56e057f20f883e","newPass":"test"}
		if($("#newPwd1").val() == $("#newPwd2").val()){
			$.ajax({
				type:"post",
				url:baseUrl+"/user/EditPwd",
				async:true,
				dataType:"json",
				data:{"userID":$("#userId").val(),'oldPass':$("#oldPwd").val(),"newPass":$("#newPwd1").val()},
				success:function(data){
					if(data.success){
							alert("修改成功");							
					}else{
						dataError(data);
					}
				}
				
			});
		}else{
			alert("输入2次新密码不一致请重新确认")
		}
		
	}
	initEditPwd();
	$("#savePwd").on("click",function(){
		editPwd();
	})
})
