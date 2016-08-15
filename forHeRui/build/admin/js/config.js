
var config= function(){
	var configJson={
		"baseUrl":"http://127.0.0.1:3000",
		"expires":7
	}
	
	return{
		get:function(name){
			return configJson[name]?configJson[name]:undefined;
		}
	}
}()
