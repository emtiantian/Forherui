var express = require('express');
//日志
var log = require('./log');
//user controller
var userController = require("./user");
//微信控制器
var wechatController = require("./wechat");
//line控制器
var lineController = require("./line");




//服务器框架
var app = express();
//json 解析
var jsonStr = null;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//设置跨域访问
app.all('*', function(req, res, next) {	
	//设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log("接到请求了");
    next(); 
});
//json psot 解析
app.post("*",function(req, res, next){
	//json 解析
	jsonStr = req.body;
    next();
})
//json get 解析
app.get("*",function(req, res, next){
	jsonStr = req.query;
	next();
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('啊  Example app listening at http://%s:%s', host, port);
});

//测试 get
app.get('/user/login',function(req,res){
	
	var user = {
		"userName": "herui",
		"userPwd": 123456
	}
	var success = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			"login": true,
			"level": "admin"
		}
	}
	var error = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			"login": false,
			"level": ""
		}
	}
	if(jsonStr != undefined){
		log.log("userName" + jsonStr.userName + "userPwd" + req.query.userPwd);		
		if(jsonStr.userName == user.userName && jsonStr.userPwd == user.userPwd) {
			log.log("登录成功");
			res.json(success);
		} else {
			log.log("登录失败");
			res.json(error);
		}
	}else{
		log.log("登录失败");
		res.json(error);
	}	
})


//模拟用户登录 
app.post('/user/login',function(req,res){
	res.json( userController.userLogin(jsonStr));
})

//模拟获取菜单接口
app.post("/user/menuList",function(req,res){
	res.json(userController.menuList());
})
//模拟用户线路列表
app.post("/user/pictureAllow",function(req,res){
	res.json(userController.userLine());
})
//模拟用户列表
app.post("/user/list",function(req,res){
	res.json(userController.userList());
})
//模拟用户登出
app.post("/user/logout",function(req,res){
	res.json(userController.userLogout());
})
//用户当前信息
app.post("/user/get",function(req,res){
	res.json(userController.userGet());
})





//模拟微信用户列表
app.post("/wechat/user/list",function(req,res){
	res.json(wechatController.wechatUserList());
})
//模拟微信用户列表
app.post("/wechat/user/create",function(req,res){
	res.json(wechatController.wechatUserCreate());
})

//模拟微信修改
app.post("/wechat/user/edit",function(req,res){
	res.json(wechatController.wechatUserEdit());
})
//模拟微信删除
app.post("/wechat/user/delete",function(req,res){
	res.json(wechatController.wechatUserDelete());
})



//模拟线路列表
app.post("/Line/lineList",function(req,res){
	res.json(lineController.lineList());
})
//模拟线路更新
app.post("/Line/Update",function(req,res){
	res.json(lineController.lineEdit());
})
//模拟线路删除
app.post("/Line/delete",function(req,res){
	res.json(lineController.lineDelete());
})
//模拟线路创建
app.post("/Line/create",function(req,res){
	res.json(lineController.lineCreate());
})

