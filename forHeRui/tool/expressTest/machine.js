function machineList(){
	var success={
	"success": true,
	"code": 0,
	"msg": "",
	"data": [{
		"machineComment": "",
		"machineGPS": null,
		"machinePosition": null,
		"Tower": "57#",
		"productComp": "",
		"CompID": "A0000000000000056",
		"InstallTime": "2016-08-18T14:52:01",
		"InstallUser": "何瑞",
		"State": "2",
		"machineId": 11,
		"code": "bj_Test2",
		"machineName": "Test"
	},{
		"machineComment": "",
		"machineGPS": null,
		"machinePosition": null,
		"Tower": "58#",
		"productComp": "",
		"CompID": "A0000000000000057",
		"InstallTime": "2016-08-18T14:52:01",
		"InstallUser": "何瑞1",
		"State": "2",
		"machineId": 111,
		"code": "bj_Test2",
		"machineName": "Test"
	},{
		"machineComment": "",
		"machineGPS": null,
		"machinePosition": null,
		"Tower": "58#",
		"productComp": "",
		"CompID": "A0000000000000057",
		"InstallTime": "2016-08-18T14:52:01",
		"InstallUser": "",
		"State": "2",
		"machineId": 111,
		"code": "bj_Test2",
		"machineName": "Test"
	}
	]
}
	
	return success;
}
function machineCreate(){
	var success= 
	{
	"success": true,
	"code": 0,
	"msg": "",
	"data": {
		"success": true
	}
	}
	return success;
}
exports.machineList = machineList;
exports.machineCreate = machineCreate;