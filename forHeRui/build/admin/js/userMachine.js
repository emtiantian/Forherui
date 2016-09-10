$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	
	var machineTable="";
	$.ajax({
			type:"post",
			url:baseUrl+"/user/get",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				if(data.success){
					initLineList(data.data.userId);	
				}else{
					dataError(data);
				}				
			}
		});
	//init 线路列表
	function initLineList(userId){
		$.ajax({
			type:"post",
			url:baseUrl+"/Line/lineList",
			async:true,
			//这里的user 在util 中获得
			data:{"userId":userId},
			dataType:"json",
			success:function(data){
				if(data.success){
					createLineList(data);
					
				}else{
					dataError(data);
				}
			}
		});
	}
	function createLineList(data){
		
		$.each(data.data, function(i,ele) {
			var html=""
//			html+='<td id="lineid">'+ele.lineid+'</td>';
			html+='<td id="">'+(i+1)+'</td>';
			html+='<td >' + ele.name + '</td>';
			html+='<td >' + ele.comments + '</td>';
			html+='<td >' + ele.lineCode + '</td>';
			var machine=""
			$.each(ele.machine,function(i2,ele2){
				if(i2 == 0 ){
					machine += ele2.machineName
				}else{
					machine += ","+ele2.machineName
				}								
			})
			html+='<td >'+machine+'</td>';
			
			html+='<td ><button id="'+ele.lineid+'" lineName="'+ele.name+'" class="selectMachine btn btn-primary">查看设备</button></td>';			
			$("#lineList").append("<tr>"+html+"</tr>");
		});
		$("#lineTable").dataTable( {
        "aaSorting": [[ 0, "asc" ]],
        "oLanguage" : {
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "抱歉， 没有找到",
                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                "sInfoEmpty": "没有数据",
                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                "sZeroRecords": "没有检索到数据",
                 "sSearch": "名称:",
                "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
                }
               }
    	});
	}
	//{"lineID":"6","machines":{"machineName":"Test","code":"bj_Test5","machineComment":"你好","productComp":"沃英泰科","compID":"A0000000000000056","tower":"57#"}}
	function crateMachineInit(id,name){
		hideAll();
		$("#lineId").val(id);
		$("#lineName").val(name);
		$("#createMachineDiv").show();
	}
	//{"success":true,"code":0,"msg":"","data":[{"machineComment":"","machineGPS":null,"machinePosition":null,"Tower":"57#","productComp":"","CompID":"A0000000000000056","InstallTime":"2016-08-18T14:52:01","InstallUser":"何瑞","State":"2","machineId":11,"code":"bj_Test2","machineName":"Test"}]}
	function machineListInit(data,lineName){
		hideAll()
		
		if(machineTable != ""){
				machineTable.fnDestroy();
		}
		$("#machineList").html("");
		$.each(data.data, function(i,ele) {
			//名称、编码、简介、生产厂家、出厂编码、安装者、安装时间
			var html=""
			html+='<td>'+lineName+'</td>';
			html+='<td>' + ele.machineName + '</td>'
			html+='<td>' + ele.code + '</td>'
			html+='<td>' + ele.machineComment + '</td>'			
			html+='<td>' + ele.productComp + '</td>'
			html+='<td>' + ele.Tower + '</td>'
			html+='<td>' + ele.CompID + '</td>'
			html+='<td>' + ele.InstallUser + '</td>'
			if(ele.InstallTime == null){
				html+='<td></td>'
			}else{
				html+='<td>' + ele.InstallTime + '</td>'
			}	
			html+='<td >在线</td>';
//			html+='<td ><button id="'+ele.machineId+'" dataName="'+ele.machineName+'" class="editMachine btn btn-primary">修改设备</button><button id="'+ele.machineId+'" class="deletMachine btn btn-primary">删除设备</button>'
//			if(ele.InstallUser == ""){
//				html+='<button id="'+ele.machineId+'" class="installMachine btn btn-primary" data-toggle="modal" data-target="#myModal" >安装设备</button></td>';
//			}else{
//				html+='</td>'
//			}
			$("#machineList").append("<tr>"+html+"</tr>");		
		});
		
		
		machineTable = $("#machineTable").dataTable( {
        "aaSorting": [[ 0, "asc" ]],
        "oLanguage" : {
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "抱歉， 没有找到",
                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                "sInfoEmpty": "没有数据",
                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                "sZeroRecords": "没有检索到数据",
                 "sSearch": "名称:",
                "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
                }
               }
        
    	});
    	
		$("#editMachineDiv").show();
	};
	
	function hideAll(){
		$("#createMachineDiv").hide();
		$("#editMachineDiv").hide();
	}
	
	
	function machineList(lineId,lineName){
		$.ajax({
			type:"post",
			url:baseUrl+"/machine/list",
			async:true,
			data:{"lineId":lineId},
			dataType:"json",
			success:function(data){
				if(data.success){
					machineListInit(data,lineName);
				}else{
					dataError(data);
				}
			}
		});	
	}
	//{"machineId":"17","machineName":"","code":"bj_Test7","machineComment":"说明","productComp":"cc","compID":"A000000","tower":"dd"}
	function editMachine(machineId,machineName,code,machineComment,productComp,compID,tower){
		$.ajax({
			type:"post",
			url:baseUrl+"/machine/Update",
			async:true,
			data:{"machineId":machineId,"machineName":machineName,"code":code,"machineComment":machineComment,"productComp":productComp,"compID":compID,"tower":tower},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("修改设备成功")
				}else{
					dataError(data);
				}
			}
		});
	}
	function createMachine(lineId,machines){
		$.ajax({
			type:"post",
			url:baseUrl+"/machine/create",
			async:true,
			dataType:"json",
			data:{"lineID":lineId,"machines":machines},
			succsee:function(data){
				if(data.success){
					alert("创建设备成功 id：" + data.data)
				}else{
					dataError(data);
				}
			}
		});
	}
	function deleteMachine(machineId){
		$.ajax({
			type:"post",
			url:baseUrl+"/machine/delete",
			async:true,
			data:{"machineId":machineId},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("删除设备成功 3秒后刷新")
					setTimeout(function(){
						location.reload();
					},3000)
				}else{
					dataError(data);
				}
			}
		});
	}
	function installMachine(machineId,user){
		$.ajax({
			type:"post",
			url:baseUrl+"/machine/install",
			async:true,
			dataType:"json",
			data:{"machineId":machineId,"user":user},
			success:function(){
				if(data.success){
					alert("安装设备成功 3秒后刷新")
					setTimeout(function(){
						location.reload();
					},3000)
				}else{
					dataError(data);
				}
			}
		});
	}
	
	$(document).on("click",".addMachine",function(){
		crateMachineInit($(this).attr("id"),$(this).attr("dataName"))
		
	})
	$(document).on("click",".selectMachine",function(){
		machineList($(this).attr("id"),$(this).attr("lineName"));
	})
	$("#createMachine").on("click",function(){
		var lineId = $("#lineId").val()
		,machines = {}
		machines.machineName=$("#machineName").val()
		machines.code=$("#machineCode").val()
		machines.machineComment=$("#machineComment").val()
		machines.productComp=$("#machineProductComp").val()
		machines.compID=$("#machineCompID").val()
		machines.tower=$("#machineTower").val()
		createMachine(lineId,machines)
	})
	$(document).on("click",".editMachine",function(){
		var machineId = $(this).attr("id")
		,machineName = $(this).parent().parent().find("#editmachineName").val()
		,code = $(this).parent().parent().find("#code").val()
		,machineComment =$(this).parent().parent().find("#editmachineComment").val()
		,productComp = $(this).parent().parent().find("#productComp").val()
		,compID = $(this).parent().parent().find("#compID").val()
		,tower =$(this).parent().parent().find("#tower").val()
		editMachine(machineId,machineName,code,machineComment,productComp,compID,tower);
	})
	$(document).on("click",".deletMachine",function(){
		deleteMachine($(this).attr("id"));
	})
	
	//需要弹出框
	$(document).on("click",".installMachine",function(){
		 $("#mymodal").modal("toggle");
		 $("#installId").val($(this).attr("id"));
	})
	$("#install").on("click",function(){
		installMachine($("#installId").val(),$("#installUser").val());
	})
})
