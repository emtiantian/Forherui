//日志
function lineList(){
	var success = {
	 	"success": true,
	 	"code": 0,
	 	"msg": "",
	 	"data": [{
	 		"lineid": 6,
	 		"name": "测试线路2",
	 		"comments": "测试线路2说明",
	 		"lineCode": "线路编码3",
	 		"machine": [{
	 			"machineId": 11,
	 			"code": "bj_Test2",
	 			"machineName": "Test"
	 		}]
	 	},
	 	{
	 		"lineid": 7,
	 		"name": "测试线路3",
	 		"comments": "测试线路2说明",
	 		"lineCode": "线路编码3",
	 		"machine": [{
	 			"machineId": 11,
	 			"code": "bj_Test2",
	 			"machineName": "Test"
	 		}]
	 	}
	 	]
	}
	 return success
	
}


function lineDelete(){
	var  sucess = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return sucess
}

function lineEdit(){
	var  sucess = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return sucess
}

function lineCreate(){
	var  sucess = {
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			
		}
	}
	return sucess
}

//线路修改对应机器

exports.lineList = lineList;
exports.lineDelete = lineDelete;
exports.lineEdit = lineEdit;
exports.lineCreate = lineCreate;