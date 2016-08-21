//日志
var log = require('./log');

	//模拟用户
	var userJson = {
		"userName": "herui",
		"userPwd": 123456,
		"level":"admin"
	}
	//模拟解析正确
	var successJson = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	//模拟服务器错误
	var errorJson = {
		"success": false,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	//模拟用户线路信息
	var userLineJson={"userLine":[
			{
				"line":{
					"lineId" :"12",
					"lineCode":"12",
					"lineName":"线路1",
					"select":true
					},
				"machine":[
					
						{
							"machineId":"123",
							"machineName":"机器1",
							"select":true
						},
						{
							"machineId":"124",
							"machineName":"机器2",
							"select":true
						},
						{
							"machineId":"125",
							"machineName":"机器3",
							"select":true	
						},						
						{
							"machineId":"126",
							"machineName":"机器4",
							"select":false
						}
					
				]
			},
			{
				"line":{
					"lineCode":"13",
					"lineName":"线路2",
					"select":true
					},
				"machine":[
					
						{
							"machineId":"133",
							"machineName":"机器5",
							"select":true
						},
						{
							"machineId":"134",
							"machineName":"机器6",
							"select":true
						},
						{
							"machineId":"135",
							"machineName":"机器7",
							"select":true
						},						
						{
							"machineId":"136",
							"machineName":"机器8",
							"select":false
						}
					
				]
			}
		]
	}
	
	//模拟menuList
	var menuListJson=
	{
	    "superAdmin": {
	        "menuList": [
	            {
	                "parent": "index",
	                "child": [
	                    "index.html",
	                    "modifyPicture.html",
	                    "chartPicture.html"
	                ]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
	                ]
	            },
//	            {
//	                "parent": "weChat",
//	                "child": [
//	                    "weChatUser.html"
//	                ]
//	            },
	            {
	            	"parent":"lineAdmin",
	            	"child":[
	            		"userPictureConfig.html",
	            		"userConfig.html"
	            	]
	            },
	            {
	            	"parent":"admin",
	            	"child":[
	            		"adminPictureConfig.html",
//	            		"lineMachineConfig.html",
	            		"userAdminConfig.html",
//	            		"menuConfig.html",
	            		"lineConfig.html",
	            		"machineConfig.html"
	            	]
	            },
	            {
	            	"parent":"superAdmin",
	            	"child":[
	            		"adminConfig.html"
	            	]
	            }
	        ]
	    },
	    "admin":{
	    	"menuList": [
	            {
	                "parent": "index",
	                "child": [
	                    "index.html",
	                    "modifyPicture.html",
	                    "chartPicture.html"
	                ]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
	                ]
	            },
//	            {
//	                "parent": "weChat",
//	                "child": [
//	                    "weChatUser.html"
//	                ]
//	            },
	            {
	            	"parent":"lineAdmin",
	            	"child": [
	            		"userPictureConfig.html",
	            		"userConfig.html"
	            	]
	            },
	            {
	            	"parent":"admin",
	            	"child":[
	            		"adminPictureConfig.html",
//	            		"lineMachineConfig.html",
	            		"userAdminConfig.html",
//	            		"menuConfig.html",
	            		"lineConfig.html",
	            		"machineConfig.html"
	            	]
	            }
	        ]
	    },
	    "lineAdmin":{
	    	"menuList": [
	            {
	                "parent": "index",
	                "child": [
	                    "index.html",
	                    "modifyPicture.html",
	                    "chartPicture.html"
	                ]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
	                ]
	            },
//	            {
//	                "parent": "weChat",
//	                "child": [
//	                    "weChatUser.html"
//	                ]
//	            },
	            {
	            	"parent":"lineAdmin",
	            	"child":[
	            		"userPictureConfig.html",
	            		"userConfig.html"
	            	]
	            }
	        ]
	    },
	    "user":{
	    	"menuList": [
	            {
	                "parent": "index",
	                "child": [
	                    "index.html",
	                    "modifyPicture.html",
	                    "chartPicture.html"
	                ]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
	                ]
	            },
//	            {
//	                "parent": "weChat",
//	                "child": [
//	                    "weChatUser.html"
//	                ]
//	            }
	        ]    
	    }
	}
	var userListJson=[{
	"userId": 1,
	"userLoginName": "admin",
	"name": "何瑞",
	"level": "superAdmin",
	"Wechat": {
		"userid": "herui",
		"name": "何瑞",
		"department": null,
		"Position": "",
		"Gender": 1,
		"Mobile": "15726699262",
		"Email": "",
		"WeixinID": "wxid_0dlzp5mo11hi22",
		"Avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
		"status": 1,
		"extattr": null,
		"Disable": false
	},
	"ParnetID": 1
}, {
	"userId": 2,
	"userLoginName": "test11",
	"name": "黎浩",
	"level": "admin",
	"Wechat": {
		"userid": "",
		"name": "",
		"department": null,
		"Position": "",
		"Gender": 1,
		"Mobile": "",
		"Email": "",
		"WeixinID": "",
		"Avatar": "",
		"status": 4,
		"extattr": null,
		"Disable": false
	},
	"ParnetID": 0
}, {
	"userId": 4,
	"userLoginName": "lihao",
	"name": "黎浩",
	"level": "admin",
	"Wechat": {
		"userid": "",
		"name": "",
		"department": null,
		"Position": "",
		"Gender": 1,
		"Mobile": "",
		"Email": "",
		"WeixinID": "",
		"Avatar": "",
		"status": 4,
		"extattr": null,
		"Disable": false
	},
	"ParnetID": 0
}]
	
//用户登录
function userLogin(jsonStr){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	};
	if(jsonStr != undefined){
		log.log("userName" + jsonStr.userName + "userPwd" + jsonStr.userPwd);		
		if(jsonStr.userName == userJson.userName && jsonStr.userPwd == userJson.userPwd) {
			log.log("登录成功");
			success.data.login=true;
			success.data.level=userJson.level;		
			return success;
		} else {
			log.log("登录失败用户名或密码不对");
			success.data.login=false;
			success.data.level="";	
		return success;
		}
	}else{
		log.log("登录失败没有收到数据");
		success.data.login=false;
		success.data.level="";	
		return success;	
	}
}
//复制对象 而不是对象的地址
//function clone(obj){  
//  function Clone(){}  
//  Clone.prototype = obj;  
//  var o = new Clone();  
//  for(var a in o){  
//      if(typeof o[a] == "object") {  
//          o[a] = clone(o[a]);  
//      }  
//  }  
//  return o;  
//} 

//复制对象 而不是对象的地址
function clone(source) {
	var result = {};
	for(var key in source) {
		result[key] = typeof source[key] === 'object' ? clone(source[key]) : source[key];
	}
	return result;
}


//用户菜单列表
function menuList(jsonStr){
	//默认为当前用户
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	};
	success.data=menuListJson["superAdmin"]
	return success;
}

//用户线路列表
function userLine(jsonStr){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	};
	console.dir(success);
	success.data = userLineJson;
	console.dir(success);
	return success;
}

//用户列表
function userList(jsonStr){
	var success={
	"success": true,
	"code": 0,
	"msg": "",
	"data": [{
		"userId": 1,
		"userLoginName": "admin",
		"name": "何瑞",
		"level": "superAdmin",
		"Wechat": {
			"userid": "herui",
			"name": "何瑞",
			"department": null,
			"Position": "",
			"Gender": 1,
			"Mobile": "15726699262",
			"Email": "",
			"WeixinID": "wxid_0dlzp5mo11hi22",
			"Avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
			"status": 1,
			"extattr": null,
			"Disable": false
		},
		"ParnetID": 1
	}, {
		"userId": 2,
		"userLoginName": "test11",
		"name": "黎浩",
		"level": "admin",
		"Wechat": {
			"userid": "",
			"name": "",
			"department": null,
			"Position": "",
			"Gender": 1,
			"Mobile": "",
			"Email": "",
			"WeixinID": "",
			"Avatar": "",
			"status": 4,
			"extattr": null,
			"Disable": false
		},
		"ParnetID": 0
	}, {
		"userId": 4,
		"userLoginName": "lihao",
		"name": "黎浩",
		"level": "admin",
		"Wechat": {
			"userid": "",
			"name": "",
			"department": null,
			"Position": "",
			"Gender": 1,
			"Mobile": "",
			"Email": "",
			"WeixinID": "",
			"Avatar": "",
			"status": 4,
			"extattr": null,
			"Disable": false
		},
		"ParnetID": 0
	}]
}
	return success;
}

//用户登出
function userLogout(jsonStr){
	var json={success: true, code: 0, msg: "", data: {success: true}};
	return json;	
}
//用户当前信息
function userGet(){
	var success={
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			"userId": 1,
			"userLoginName": "admin",
			"name": "何瑞",
			"level": "superAdmin",
			"Wechat": {
				"userid": "herui",
				"name": "何瑞",
				"department": null,
				"position": "",
				"gender": 1,
				"mobile": "15726699262",
				"email": "",
				"weixinID": "wxid_0dlzp5mo11hi22",
				"avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
				"status": 1,
				"extattr": null,
				"disable": false
			},
			"ParnetID": 1
		}
	}
	return success;
}

//定义   
exports.userLogin = userLogin;
exports.menuList = menuList;
exports.userLine = userLine;
exports.userList = userList;
exports.userLogout = userLogout;
exports.userGet = userGet;
