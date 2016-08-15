testPost 是用来测试psot和get接口的
文件说明 
		test.js 封装了模拟post请求的方法
		server.js	express服务器
		demo.js	测试文件
使用方法 
		1.安装 node.js
		2.进入对应目录 npm install
		3.运行 server 模拟服务器 node server
		4.运行 demo 模拟发送post请求 node demo
		注：我只测了post get没试  
			cmd 请运行2个 一个做服务器 一个做post请求
			
上面的废弃了

使用 demo.html测试post
使用方法
	1.修改demo.html 中的testJson
	2.url 为访问接口地址
	  name为接口名字
	  data为接口数据
	3.可以多个接口分别测试
	4.session在页面没关闭都可以 有session	
	例如：{
				"url": "/user/login",
				"name": "登录",
				"data": {
					"userName": "admin",
					"userPwd": "hello"
				}
			}