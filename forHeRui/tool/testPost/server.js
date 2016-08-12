//后台服务器
var express = require('express');

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

//后台接收3000端口请求
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

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
//后台login接口 get
app.get("/user/login",function(req,res){
	console.log("接到数据了");
	console.dir(jsonStr);
	var user= {"userName":"haohe","userPwd":"123456"}
	if(jsonStr != undefined){
		log.log("userName" + jsonStr.userName + "userPwd" + req.query.userPwd);		
		if(jsonStr.userName == user.userName && jsonStr.userPwd == user.userPwd) {
			log.log("登录成功");
			res.json(success);
		} else {
			log.log("登录失败");
			res.json(error);
		}
	}
	res.json(success);
})
//后台login接口 post
app.post("/user/login",function(req,res){
	console.log("接到数据了");
	console.dir(jsonStr);
	var user= {"userName":"haohe","userPwd":"123456"}
	if(jsonStr != undefined){
		console.log("接到了post的数据"+"userName" + jsonStr.userName + "userPwd" + req.query.userPwd);		
		if(jsonStr.userName == user.userName && jsonStr.userPwd == user.userPwd) {	
			res.json(success);
		} else {
			res.json(error);
		}
	}
	res.json(success);
})