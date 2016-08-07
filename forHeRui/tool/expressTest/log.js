// 加载File System读写模块  
var fs = require('fs');  
// 加载编码转换模块  
var iconv = require('iconv-lite');
// 加载时间格式化
var moment = require("moment");


  
var file = "log.txt";  

function log(arr){  
     
    // appendFile，如果文件不存在，会自动创建新文件  
    // 如果用writeFile，那么会删除旧文件，直接写新文件  
    // console.dir 的源码
    // util.inspect(object, { customInspect: false }) + '\n'
    var text=moment().format("YYYY-MM-DD HH:mm:ss")+" : "+ arr + '\n'+"\r";
    fs.appendFile(file, text, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok");  
    });  

} 

//遍历对象
function allPrpos ( obj ) { 
  // 用来保存所有的属性名称和值 
  var props = "" ; 
  // 开始遍历 
  for ( var p in obj ){ // 方法 
  if ( typeof ( obj [ p ]) == " function " ){ obj [ p ]() ; 
  } else { // p 为属性名称，obj[p]为对应属性的值 
  props += p + " = " + obj [ p ] + " \r " ; 
  } } // 最后显示所有的属性 
 return props;
}

//定义   
exports.log = log;