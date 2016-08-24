$(function(){
	//基础url
	var baseUrl = config.get("baseUrl");
	
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
			html+='<td ><input class="form-control sm" id="name" type="text" value="' + ele.name + '" /></td>';
			html+='<td ><input class="form-control " id="comments" type="text" value="' + ele.comments + '" /></td>';
			html+='<td ><input class="form-control sm" id="lineCode" type="text" value="' + ele.lineCode + '" /></td>';
			var machine=""
			$.each(ele.machine,function(i2,ele2){
				if(i2 == 0 ){
					machine += ele2.machineName
				}else{
					machine += ","+ele2.machineName
				}								
			})
			html+='<td >'+machine+'</td>';
			html+='<td ><button id="'+ele.lineid+'" dataName="'+ele.name+'" class="addMachine btn btn-primary">添加机器</button><button id="'+ele.lineid+'" class="selectMachine btn btn-primary">查看机器</button></td>';			
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
	function machineListInit(data){
		hideAll()
		$.each(data.data, function(i,ele) {
			
		});
		$("#editMachineDiv").show();
	};
	
	function hideAll(){
		$("#createMachineDiv").hide();
		$("#editMachineDiv").hide();
	}
	
	
	function machineList(lineId){
		$.ajax({
			type:"post",
			url:baseUrl+"machine/list",
			async:true,
			data:{"lineId":lineId},
			dataType:"json",
			success:function(data){
				if(data.success){
					machineListInit(data);
				}else{
					dataError(data);
				}
			}
		});	
	}
	
	function editMachine(){
		$.ajax({
			type:"post",
			url:baseUrl+"",
			async:true,
			data:{},
			dataType:"json",
			success:function(data){
				if(data.success){
					
				}else{
					dataError(data);
				}
			}
		});
	}
	function createMachine(){
		$.ajax({
			type:"post",
			url:baseUrl+"",
			async:true
		});
	}
	
	
	$(document).on("click",".addMachine",function(){
		crateMachineInit($(this).attr("id"),$(this).attr("dataName"))
		
	})
	$(document).on("click",".selectMachine",function(){
		machineList($(this).attr("id"));
	})
	$("#createMachine").on("click",function(){
		
	})
})
