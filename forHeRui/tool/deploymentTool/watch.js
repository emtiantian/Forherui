//加载监听模块
var chokidar = require('chokidar');
// 加载File System读写模块  
var fs = require('fs');  
// 加载时间格式化
var moment = require("moment");

//修改记录
var change="change.log";

//日志
var logText= "log.log";

//设置监听的相当路径
var watchPath='E:/code/gitcode/forherui/forHeRui/tool/expressTest';

var watcher = chokidar.watch(watchPath, {
ignored: '*.log', 
persistent: true,
cwd:watchPath
});


function log(arr){  
     
    // appendFile，如果文件不存在，会自动创建新文件  
    // 如果用writeFile，那么会删除旧文件，直接写新文件  
    // console.dir 的源码
    // util.inspect(object, { customInspect: false }) + '\n'
    var text=moment().format("YYYY-MM-DD HH:mm:ss")+" : "+ arr + '\n'+"\r";
    fs.appendFile(logText, text, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok");  
    });  

} 


function needCopy(path){
	 var text=moment().format("YYYY-MM-DD HH:mm:ss")+"^^"+"copy"+"^^"+ path + '\n'+"\r";
    fs.appendFile(change, text, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok 需要copy");  
    });
}

function needDelete(path){
	 var text=moment().format("YYYY-MM-DD HH:mm:ss")+"^^"+"delete"+"^^"+ path + '\n'+"\r";
    fs.appendFile(change, text, function(err){  
        if(err)  
            console.log("fail " + err);  
        else  
            console.log("写入文件ok 需要delete");  
    });
}


watcher
.on('add', function(path) { 
	needCopy(path);
	log('File :'+path+':has been added'); 
})
.on('addDir', function(path) { 
	needCopy(path);
	log('Directory:'+ path+':has been added'); 
})
.on('change', function(path) { 
	needCopy(path);
	log('File:'+ path+':has been changed'); 
})
.on('unlink', function(path) { 
	needDelete(path);
	log('File:'+ path+':has been removed'); 
})
.on('unlinkDir', function(path) { 
	needDelete(path);
	log('Directory:'+ path+':has been removed');
})
.on('error', function(error) { 
	log('Error happened:'+ error);
})
.on('ready', function() { 
	//初始化完成后删除 初始化输出内容	
	fs.unlink(change, function(){
	console.log('success') ;
	}) ;
	log('Initial scan complete. Ready for changes.');
})
.on('raw', function(event, path, details) { 
	log('Raw event info::'+ event+ ":"+path+":"+ details);
})


    

