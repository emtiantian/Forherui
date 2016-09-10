
var config= function(){
	var configJson={
		"baseUrl":"http://127.0.0.1:3000",//基础url
		"expires":7,//登录cookie保存时间
		"imgWidth":1600,//展示图片宽度
		"imgHeight":1200,//展示图片高度	
		"pwd": 123456,
	}
	
	return{
		get:function(name){
			return configJson[name]?configJson[name]:undefined;
		}
	}
}()
