
var config= function(){
	var configJson={
		"baseUrl":"../",//基础url
		"expires":7,//登录cookie保存时间
		"imgWidth":1600,//展示图片宽度
		"imgHeight":1200,//展示图片高度	

	}
	
	return{
		get:function(name){
			return configJson[name]?configJson[name]:undefined;
		}
	}
}()
