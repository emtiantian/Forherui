


//获取用户微信信息
function wechatUserList(){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			"user": "0",
			"userId": "111",
			"name": "dd",
			"department": "1",
			"position": "工程师",
			"mobile": "15726699265",
			"gender": "1",
			"email": "herui13@126.com",
			"weixinId": "",
			"avatar": "",
			"extattr": ""
		}
	}
	
	return success;
}
function wechatUserCreate(){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return success;
}
function wechatUserEdit(){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return success;
}
function wechatUserDelete(){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return success;
}

exports.wechatUserList = wechatUserList;
exports.wechatUserCreate = wechatUserCreate;
exports.wechatUserEdit = wechatUserEdit;
exports.wechatUserDelete = wechatUserDelete;
