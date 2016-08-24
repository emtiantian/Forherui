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
	
	
	//生成线路列表
	//{"success":true,"code":0,"msg":"","data":[{"lineid":6,"name":"测试线路2","comments":"测试线路2说明","lineCode":"线路编码3","machine":[{"machineId":11,"code":"bj_Test2","machineName":"Test"}]}]}
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
			html+='<td ><button id="'+ele.lineid+'" class="lineEdit btn btn-primary">基本信息修改</button><button id="'+ele.lineid+'" class="lineDelete btn btn-primary">删除</button></td>';			
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

	//修改
	function editLine(lineID,name,comments,lineCode){
		$.ajax({
			type:"post",
			url:baseUrl+"/Line/Update",
			async:true,
			data:{"lineID":lineID,"name":name,"comments":comments,"lineCode":lineCode},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("修改成功 3秒刷新页面");
					setTimeout(function(){
						location.reload();
					},3000);
				}else{
					dataError(data);
				}
			}
		});
	}
	//删除
	function deleteLine(lineID){
		$.ajax({
			type:"post",
			url:baseUrl+"/Line/Delete",
			async:true,
			data:{"lineID":lineID},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("删除成功 3秒刷新页面");
//					setTimeout(function(){
//						location.reload();
//					},3000);
				}else{
					dataError(data);
				}
			}
		});
	}
	
	function createLine(name,comments,lineCode){
		$.ajax({
			type:"post",
			url:baseUrl+"/Line/Create",
			async:true,
			data:{"name":name,"comments":comments,"lineCode":lineCode},
			dataType:"json",
			success:function(data){
				if(data.success){
					alert("创建成功 3秒刷新页面");
//					setTimeout(function(){
//						location.reload();
//					},3000);
				}else{
					dataError(data);
				}
			}
		});
	}
	
	$(document).on("click",".lineEdit",function(){
		var lineID = $(this).attr("id")
		,name = $(this).parent().parent().find("#name").val()
		,comments = $(this).parent().parent().find("#comments").val()
		,lineCode = $(this).parent().parent().find("#lineCode").val()
		
		editLine(lineID,name,comments,lineCode);
	})
	$(document).on("click",".lineDelete",function(){
		var lineID = $(this).attr("id");			
		deleteLine(lineID);
	})
	$("#createLine").on("click",function(){
		var name = $("#crateLineName").val()
		,comments = $("#crateLineComments").val()
		,lineCode = $("#crateLineLineCode").val()
		createLine(name,comments,lineCode);
	})
	
})
