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
				initLineList(data.data.userId);	
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
		var html=""
		$.each(data.data, function(i,ele) {
			html+='<td id="lineid">'+ele.lineid+'</td>';
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
        "aaSorting": [[ 0, "desc" ]]
    	});
	}
	//{"lineID":"6","machines":{"machineName":"Test","code":"bj_Test5","machineComment":"你好","productComp":"沃英泰科","compID":"A0000000000000056","tower":"57#"}}
	function crateMachineInit(id,name){
		hideAll();
		$("#lineId").val(id);
		$("#lineName").val(name);
		$("#createMachineDiv").show();
	}
	function machineListInit(data){
		
	};
	function hideAll(){
		$("#createMachineDiv").hide();
		
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
					
				}else{
					
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
					
				}
			}
		});
	}
	
	
	$(document).on("click",".addMachine",function(){
		crateMachineInit($(this).attr("id"),$(this).attr("dataName"))
		
	})
	$(document).on("click",".selectMachine",function(){
		
	})
})
