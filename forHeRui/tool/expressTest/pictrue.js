function pictureList(){
	var  success=
	{
		"success": true,
		"code": 0,
		"msg": "",
		"data": {
			"picture": [{
				"id": 7,
				"pictureWidth": 640,
				"pictureHeight": 480,
				"size": 15282,
				"url": "images/gallery/test//1.jpg",
				"time": "2016-08-17T13:25:36",
				"info": []
			}, {
				"id": 8,
				"pictureWidth": 640,
				"pictureHeight": 480,
				"size": 15282,
				"url": "images/gallery/test//2.jpg",
				"time": "2016-08-17T13:32:13",
				"info": [{
					"id": 12,
					"top": 115,
					"left": 256,
					"author": "hello1",
					"title": "标题1",
					"descr": "内容1"
				}]
			}, {
				"id": 9,
				"pictureWidth": 640,
				"pictureHeight": 480,
				"size": 15282,
				"url": "images/gallery/test//3.jpg",
				"time": "2016-08-17T13:32:26",
				"info": []
			}, {
				"id": 10,
				"pictureWidth": 640,
				"pictureHeight": 480,
				"size": 15282,
				"url": "images/gallery/test//4.jpg",
				"time": "2016-08-17T13:32:52",
				"info": []
			}, {
				"id": 11,
				"pictureWidth": 640,
				"pictureHeight": 480,
				"size": 15282,
				"url": "images/gallery/test//5.jpg",
				"time": "2016-08-17T13:34:45",
				"info": []
			}, {
				"id": 12,
				"pictureWidth": 1280,
				"pictureHeight": 1024,
				"size": 51044,
				"url": "images/gallery/test//6.jpg",
				"time": "2016-08-17T13:35:35",
				"info": []
			}, {
				"id": 13,
				"pictureWidth": 1280,
				"pictureHeight": 1024,
				"size": 83289,
				"url": "images/gallery/test//7.jpg",
				"time": "2016-08-17T13:35:59",
				"info": []
			}, {
				"id": 14,
				"pictureWidth": 1280,
				"pictureHeight": 1024,
				"size": 59689,
				"url": "images/gallery/test//8.jpg",
				"time": "2016-08-17T13:36:13",
				"info": []
			}, {
				"id": 15,
				"pictureWidth": 1280,
				"pictureHeight": 1024,
				"size": 59689,
				"url": "images/gallery/test//9.jpg",
				"time": "2016-08-17T14:23:27",
				"info": []
			}]
		}
	}
	return success;
//var	error= {"success":true,"code":0,"msg":"","data":{"picture":[]}}
//	return error;
}
function pictureShowline(){
	var success = {
	"success": true,
	"code": 0,
	"msg": "",
	"data": {
		"picture": [{
			"machine": {
				"machineId": 10,
				"code": "bj_test1",
				"machineName": "等到"
			},
			"picture": {
				"id": 31,
				"pictureWidth": 908,
				"pictureHeight": 908,
				"size": 167799,
				"url": "images/gallery/test//9.jpg",
				"time": "2016-09-14T17:00:04",
				"info": null
			}
		}, {
			"machine": {
				"machineId": 4,
				"code": "bj_test",
				"machineName": "测试设备"
			},
			"picture": null
		}]
	}
}
	return success;
}

exports.pictureList =  pictureList;
exports.pictureShowline = pictureShowline;