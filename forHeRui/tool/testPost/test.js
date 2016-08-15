var http = require('http');  
  
var qs = require('querystring');  
    
function get(host,port,url,data,callback){
	var content = qs.stringify(data);  
  
	var options = {  
	    hostname: host,  
	    port: port,  
	    path: url+'?' + content,  
	    method: 'GET'  
	};  
	  
	var req = http.request(options, function (res) {  
	    console.log('STATUS: ' + res.statusCode);  
	    console.log('HEADERS: ' + JSON.stringify(res.headers));  
	    res.setEncoding('utf8');  
	    res.on('data', function (chunk) {  
	        console.log('接到的服务器返回值BODY: ' + chunk); 
	        callback(chunk);
	    });  
	});  
	  
	req.on('error', function (e) {  
	    console.log('problem with request: ' + e.message);
	    callback(e.message);
	}); 
	req.end(); 
}

function post(host,port,url,data,callback){
 	  
	var content = qs.stringify(data);  
	  
	var options = {  
	    hostname: '127.0.0.1',  
	    port: port,  
	    path: url,  
	    method: 'POST',  
	    headers: {  
	        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
	    }  
	};  
	  
	var req = http.request(options, function (res) {  
	    console.log('STATUS: ' + res.statusCode);  									//显示http发送状态
//	    console.log('HEADERS: ' + JSON.stringify(res.headers));		//显示http头部  
	    res.setEncoding('utf8');  
	    res.on('data', function (data) {  
//	        console.log('BODY: ' + data);  //显示返回数据内容
	        callback(data)
	    });  
	});  
	  
	req.on('error', function (e) {  
	    console.log('problem with request: ' + e.message);  
	     callback( e.message)
	});  
	  
	// write data to request body  
	req.write(content);  
	  
	req.end(); 
}
//test
//var host="127.0.0.1"
//var port="81"
//var url="/user/login"
//var data={"userName":"herui","userPwd":"123456"}
//var callback=function(data){
//	console.log("接到了服务器发来的数据");
//	console.dir(data);
//}
//post(host,port,url,data,callback)
//定义   
exports.get = get;
exports.post = post;
