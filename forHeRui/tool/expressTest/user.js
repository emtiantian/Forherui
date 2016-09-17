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
	var userLineJson=[
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
					"lineId": "13",
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
	
	
	//模拟menuList
	var menuListJson=
	{
	    "superAdmin": {
	        "menuList": [
	            {
	                "parent": "index",
	                "child": [
	                    "index.html",
	                    "userMachine.html",
//	                    "chartPicture.html"
	                ]
	            },	            
//	            {
//	            	"parent":"lineAdmin",
//	            	"child":[
//	            		"userPictureConfig.html",
//	            		"userConfig.html"
//						"lineAdminlevelConfig.html"	
//	            	]
//	            },
	            {
	            	"parent":"admin",
	            	"child":[
	            		"adminPictureConfig.html",	            		
	            		"adminlevelConfig.html",
	            		"lineConfig.html",
	            		"machineConfig.html"
	            	]
	            },
	            {
	            	"parent":"superAdmin",
	            	"child":[
	            		"adminConfig.html"
	            	]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "userAdminConfig.html"
	                ]
	            },
	            {
	                "parent": "self",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
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
	                    "userMachine.html",
//	                    "chartPicture.html"
	                ]
	            },	            
	            {
	            	"parent":"admin",
	            	"child":[
	            		"adminPictureConfig.html",	            		
	            		"adminlevelConfig.html",
	            		"lineConfig.html",
	            		"machineConfig.html"
	            	]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "userAdminConfig.html"
	                ]
	            },
	            {
	                "parent": "self",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
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
	                    "userMachine.html",
//	                    "chartPicture.html"
	                ]
	            },	            
	            {
	            	"parent":"lineAdmin",
	            	"child":[
	            		"userPictureConfig.html",
	            		"userConfig.html",
						"lineAdminlevelConfig.html"	
	            	]
	            },
	            {
	                "parent": "user",
	                "child": [
	                    "userAdminConfig.html"
	                ]
	            },
	            {
	                "parent": "self",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
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
	                    "userMachine.html",
//	                    "chartPicture.html"
	                ]
	            },	            
	            {
	                "parent": "self",
	                "child": [
	                    "pictureConfig.html",
	                    "weChatConfig.html",
	                    "editPwd.html"
	                ]
	            }
	        ]
	    }
	}
	menuListJson1 = {
		"superAdmin": {
	        "menuList": [
	            {
	                "parent": {"key":"#","value":"监测信息查询"},
	                "child": [
	                	{"key":"index.html","value":"线路监控"},
	                    {"key":"userMachine.html","value":"设备列表"},
//	                    {"key":"chartPicture.html","value":"图片统计信息"},
	                ]
	            },	            
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"userPictureConfig.html","value":"用户微信接收图片管理"},
//	            		{"key":"userConfig.html","value":"用户管理"},
//						{"key":"lineAdminlevelConfig.html","value":"权限管理"},
//	            	]
//	            },
	            {
	            	"parent":{"key":"#","value":"设备管理"},
	            	"child":[
	            		{"key":"adminPictureConfig.html","value":"用户微信接收图片管理"},	 
	            		{"key":"lineConfig.html","value":"线路管理"},	 
	            		{"key":"machineConfig.html","value":"设备管理"},	 
	            		{"key":"adminlevelConfig.html","value":"权限管理"},	 	            	
	            	]
	            },
	            {
	            	"parent":{"key":"#","value":"管理员管理"},
	            	"child":[            		
	            		{"key":"adminConfig.html","value":"管理员管理"}
	            	]
	            },
	            {
	                "parent": {"key":"#","value":"用户管理"},
	                "child": [
	                   {"key":"userAdminConfig.html","value":"用户管理"}
	                ]
	            },
	            {
	                "parent": {"key":"#","value":"个人设置"},
	                "child": [
	                    {"key":"pictureConfig.html","value":"用户微信接收图片管理"},
	                    {"key":"weChatConfig.html","value":"微信绑定管理"},
	                    {"key":"editPwd.html","value":"个人信息"},
	                ]
	            }
	        ]
	    },
	    "admin": {
	        "menuList": [
	            {
	                "parent": {"key":"#","value":"监测信息查询"},
	                "child": [
	                	{"key":"index.html","value":"线路监控"},
	                    {"key":"userMachine.html","value":"设备列表"},
//	                    {"key":"chartPicture.html","value":"图片统计信息"},
	                ]
	            },	            
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"userPictureConfig.html","value":"用户微信接收图片管理"},
//	            		{"key":"userConfig.html","value":"用户管理"},
//						{"key":"lineAdminlevelConfig.html","value":"权限管理"},
//	            	]
//	            },
	            {
	            	"parent":{"key":"#","value":"设备管理"},
	            	"child":[
	            		{"key":"adminPictureConfig.html","value":"用户微信接收图片管理"},	 
	            		{"key":"lineConfig.html","value":"线路管理"},	 
	            		{"key":"machineConfig.html","value":"设备管理"},	 
	            		{"key":"adminlevelConfig.html","value":"权限管理"},	 	            	
	            	]
	            },
//	            {
//	            	"parent":{"key":"#","value":"管理员管理"},
//	            	"child":[            		
//	            		{"key":"adminConfig.html","value":"管理员管理"}
//	            	]
//	            },
	            {
	                "parent": {"key":"#","value":"用户管理"},
	                "child": [
	                   {"key":"userAdminConfig.html","value":"用户管理"}
	                ]
	            },
	            {
	                "parent": {"key":"#","value":"个人设置"},
	                "child": [
	                    {"key":"pictureConfig.html","value":"用户微信接收图片管理"},
	                    {"key":"weChatConfig.html","value":"微信绑定管理"},
	                    {"key":"editPwd.html","value":"个人信息"},
	                ]
	            }
	        ]
	    },
	    "lineAdmin": {
	        "menuList": [
	            {
	                "parent": {"key":"#","value":"监测信息查询"},
	                "child": [
	                	{"key":"index.html","value":"线路监控"},
	                    {"key":"userMachine.html","value":"设备列表"},
//	                    {"key":"chartPicture.html","value":"图片统计信息"},
	                ]
	            },	            
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"userPictureConfig.html","value":"用户微信接收图片管理"},
//	            		{"key":"userConfig.html","value":"用户管理"},
//						{"key":"lineAdminlevelConfig.html","value":"权限管理"},
//	            	]
//	            },
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"adminPictureConfig.html","value":"用户微信接收图片管理"},	 
//	            		{"key":"lineConfig.html","value":"线路管理"},	 
//	            		{"key":"machineConfig.html","value":"设备管理"},	 
//	            		{"key":"adminlevelConfig.html","value":"权限管理"},	 	            	
//	            	]
//	            },
//	            {
//	            	"parent":{"key":"#","value":"管理员管理"},
//	            	"child":[            		
//	            		{"key":"adminConfig.html","value":"管理员管理"}
//	            	]
//	            },
	            {
	                "parent": {"key":"#","value":"用户管理"},
	                "child": [
	                   {"key":"userAdminConfig.html","value":"用户管理"}
	                ]
	            },
	            {
	                "parent": {"key":"#","value":"个人设置"},
	                "child": [
	                    {"key":"pictureConfig.html","value":"用户微信接收图片管理"},
	                    {"key":"weChatConfig.html","value":"微信绑定管理"},
	                    {"key":"editPwd.html","value":"个人信息"},
	                ]
	            }
	        ]
	    },
	    "user": {
	        "menuList": [
	            {
	                "parent": {"key":"#","value":"监测信息查询"},
	                "child": [
	                	{"key":"index.html","value":"线路监控"},
	                    {"key":"userMachine.html","value":"设备列表"},
//	                    {"key":"chartPicture.html","value":"图片统计信息"},
	                ]
	            },	            
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"userPictureConfig.html","value":"用户微信接收图片管理"},
//	            		{"key":"userConfig.html","value":"用户管理"},
//						{"key":"lineAdminlevelConfig.html","value":"权限管理"},
//	            	]
//	            },
//	            {
//	            	"parent":{"key":"#","value":"设备管理"},
//	            	"child":[
//	            		{"key":"adminPictureConfig.html","value":"用户微信接收图片管理"},	 
//	            		{"key":"lineConfig.html","value":"线路管理"},	 
//	            		{"key":"machineConfig.html","value":"设备管理"},	 
//	            		{"key":"adminlevelConfig.html","value":"权限管理"},	 	            	
//	            	]
//	            },
//	            {
//	            	"parent":{"key":"#","value":"管理员管理"},
//	            	"child":[            		
//	            		{"key":"adminConfig.html","value":"管理员管理"}
//	            	]
//	            },
//	            {
//	                "parent": {"key":"#","value":"用户管理"},
//	                "child": [
//	                   {"key":"userAdminConfig.html","value":"用户管理"}
//	                ]
//	            },
	            {
	                "parent": {"key":"#","value":"个人设置"},
	                "child": [
	                    {"key":"pictureConfig.html","value":"用户微信接收图片管理"},
	                    {"key":"weChatConfig.html","value":"微信绑定管理"},
	                    {"key":"editPwd.html","value":"个人信息"},
	                ]
	            }
	        ]
	    },
	}
	
	var userListJson=[{
	"userId": 1,
	"userLoginName": "admin",
	"name": "何瑞",
	"level": "superAdmin",
	"wechat": {
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
	"parnetId": 1
}, {
	"userId": 2,
	"userLoginName": "test11",
	"name": "黎浩",
	"level": "admin",
	"wechat": {
		"userid": "",
		"name": "",
		"department": null,
		"position": "",
		"gender": 1,
		"mobile": "",
		"email": "",
		"weixinID": "",
		"avatar": "",
		"status": 4,
		"extattr": null,
		"disable": false
	},
	"parnetId": 0
}, {
	"userId": 4,
	"userLoginName": "lihao",
	"name": "黎浩",
	"level": "admin",
	"wechat": {
		"userid": "",
		"name": "",
		"department": null,
		"position": "",
		"gender": 1,
		"mobile": "",
		"email": "",
		"weixinID": "",
		"avatar": "",
		"status": 4,
		"extattr": null,
		"disable": false
	},
	"parnetId": 0
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
		"wechat": {
			"userId": "herui",
			"name": "何瑞",
			"department": null,
			"position": "",
			"gender": 1,
			"mobile": "15726699262",
			"email": "",
			"weixinId": "wxid_0dlzp5mo11hi22",
			"avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
			"status": 1,
			"extattr": null,
			"disable": false
		},
		"parnetId": 1
	}, {
		"userId": 2,
		"userLoginName": "test11",
		"name": "黎浩",
		"level": "admin",
		"wechat": {
			"userId": "",
			"name": "",
			"department": null,
			"position": "",
			"gender": 1,
			"mobile": "",
			"email": "",
			"weixinId": "",
			"avatar": "",
			"status": 4,
			"extattr": null,
			"disable": false
		},
		"ParnetID": 0
	}, {
		"userId": 4,
		"userLoginName": "lihao",
		"name": "黎浩",
		"level": "admin",
		"wechat": {
			"userId": "",
			"name": "",
			"department": null,
			"position": "",
			"gender": 1,
			"mobile": "",
			"email": "",
			"weixinId": "",
			"avatar": "",
			"status": 4,
			"extattr": null,
			"disable": false
		},
		"parnetId": 0
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
			"wechat": {
				"userId": "herui",
				"name": "何瑞",
				"department": null,
				"position": "",
				"gender": 1,
				"mobile": "15726699262",
				"email": "",
				"weixinId": "wxid_0dlzp5mo11hi22",
				"avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
				"status": 1,
				"extattr": null,
				"disable": false
			},
			"parnetId": 1
		}
	}
	return success;
}

function userListByLevel(){
	var success={
	"success": true,
	"code": 0,
	"msg": "",
	"data": [{
		"userId": 1,
		"userLoginName": "admin",
		"name": "何瑞1",
		"level": "lineAdmin",
		"wechat": {
			"userId": "herui",
			"name": "何瑞",
			"department": null,
			"position": "",
			"gender": 1,
			"mobile": "15726699262",
			"email": "",
			"weixinId": "wxid_0dlzp5mo11hi22",
			"avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
			"status": 1,
			"extattr": null,
			"disable": false
		},
		"parnetId": 0
	},
	{
		"userId": 2,
		"userLoginName": "admin",
		"name": "何瑞2",
		"level": "lineAdmin",
		"wechat": {
			"userId": "herui",
			"name": "何瑞",
			"department": null,
			"position": "",
			"gender": 1,
			"mobile": "15726699262",
			"email": "",
			"weixinId": "wxid_0dlzp5mo11hi22",
			"avatar": "http://shp.qpic.cn/bizmp/JpotibjdTtfkPsJEatibCtNXib4Xj1tBYwX0GAWVKgugTPm4lgVyOhNyA/",
			"status": 1,
			"extattr": null,
			"disable": false
		},
		"parnetId": 0
	}	
	]
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
exports.userListByLevel = userListByLevel;
