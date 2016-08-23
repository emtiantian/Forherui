$(function(){

	//基础url
	var baseUrl = config.get("baseUrl");
	
	//临时变量控制是否在ajax
	var isAjax =false; 
	//临时变量 记录当前管理员拥有的线路
	var adminLine={};
	
	//获得当前用户线路数据
	$.ajax({
		type:"post",
		url:baseUrl+"/user/pictureAllow",
		async:true,
		data:{"userId":""},
		dataType:"json",
		success:function(data){
				adminLine=data;
		}
	});

	//获取全部用户数据数据
	$.ajax({
		type:"post",
		url:baseUrl+"/user/list",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			initUserTable(data);
		}
	});
	
	//全部用户初始化
	function initUserTable(data){
		var html="";
		//加载数据
		$.each(data.data, function(i,ele) {		
			html+='<tr><td>'+ele.name+'</td><td><button id="'+ele.userid+' " class=" btn btn-primary userSelect" >选择</button></td></tr>';		
		});
		$("#userList").append(html);
		//初始化数据table
		$('#userTable').dataTable( {
        "aaSorting": [[ 0, "desc" ]]
    } );
	}
	//线路管理员 管理线路初始化
//	function initLine(adminLine,userLine){
//		var html="";
//		$.each(adminLine.data.userLine,function(i,ele){
////			ele.lineCode
//			$.each(userLine.data.userLine, function(i2,ele2) {
//				if(ele2.line.lineId == ele.line.lineId) {
//					$("#line").append('<option value="' + ele.line.lineId + '" selected="selected">' + ele.line.lineName + '</option>');
//				} else {
//					$("#line").append('<option value="' + ele.line.lineId + '">' + ele.line.lineName + '</option>');
//				}
//			});
//			
//		})
//		$('#line').multiSelect({});
//	}
	
	//用户线路树形多选初始化
	function initUserLine(adminLine,data){
		var htmlselect=$("#selectMuban").clone();
		if(adminLine.data){
			$.each(adminLine.data,function(i,ele){
				var htmlselect=$("#selectMuban").clone();
				$.each(ele.machine, function(i2,ele2) {
					console.log(ele.line.lineName);
					htmlselect.find("optgroup").attr("label",ele.line.lineName);
					htmlselect.find("optgroup").attr("lineId",ele.line.lineId);
					//当前为管理员 默认所有的线路
					htmlselect.find("optgroup").append('<option value="' + ele2.machineId + '">'+ele2.machineName+'</option>');
					
//					if(ele2.select){
//						htmlselect.find("optgroup").append('<option value="' + ele2.machineId + '" selected="selected">'+ele2.machineName+'</option>');
//					}else{
//						htmlselect.find("optgroup").append('<option value="' + ele2.machineId + '">'+ele2.machineName+'</option>');
//					}					
				});
				console.log(htmlselect);
				$("#userLine").append(htmlselect.html());
			})
			//变量用户已经选择的机器 吧当前的机器标记为选中
			var optionEle=$("#userLine").find("optgroup").find("option");
			$.each(data.data,function(i,ele){
				$.each(ele.machine, function(i2,ele2) {
					if(ele2.select){
						$.each(optionEle, function(i3,ele3) {
							if($(ele3).attr("value") == ele2.machineId){
								$(ele3).attr("selected","selected");
							}
						});
					}	
				});
			})
			$('#userLine').multiSelect({
				selectableHeader: "<label>管理员可选线路&机器</label><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
			    selectionHeader: "<label>用户已选线路&机器</label><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
			    afterInit: function (ms) {
			        var that = this,
			            $selectableSearch = that.$selectableUl.prev(),
			            $selectionSearch = that.$selectionUl.prev(),
			            selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
			            selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';
			
			        that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
			            .on('keydown', function (e) {
			                if (e.which === 40) {
			                    that.$selectableUl.focus();
			                    return false;
			                }
			            });
			
			        that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
			            .on('keydown', function (e) {
			                if (e.which == 40) {
			                    that.$selectionUl.focus();
			                    return false;
			                }
			            });
			    },
			    afterSelect: function () {
			        this.qs1.cache();
			        this.qs2.cache();
			    },
			    afterDeselect: function () {
			        this.qs1.cache();
			        this.qs2.cache();
			    },
			    selectableOptgroup: true
			});
			$('#userLine').show();
//			console.log($('#userLine').val());
		}else{
			alert("数据错误 请刷新重试")
			console.log("数据错误")
		}
	}
	//提交修改
	function save(machineIds){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/receivePicture",
			async:true,
			dataType:"json",
			data:{"userId":$("#userId").val(),"machineId":machineIds},
			success:function(data){
				if(daa.success){
					alert("修改成功");
				}else{
					alert(data.msg);
					console.log(data.code);
				}
			}
		});
	}
	//保存用户数据
	$("#userLineSave").on("click",function(){
		saveLine($('#userLine').val());
	})
	//监听选中用户事件
	$(document).on("click",".userSelect",function(){
		//初始化 用户已有线路
		if(!isAjax){
			isAjax=true;
			//保存到 隐藏input中提交修改时使用
			$("#userId").val($(this).attr("id"));
			//
			$.ajax({
			type:"post",
			url:baseUrl+"/user/pictureAllow",
			async:true,
			data:{"userId":$(this).attr("id")},
			dataType:"json",
			success:function(data){
//				console.log("接到数据了!");
//				console.dir(data);
				isAjax=false;
				//初始化线路管理员与当前用户的线路关系
				initUserLine(adminLine,data);
			
//				initLine(adminLine,data);
			}
		});
		}else{
			alert("正在获取数据 请稍后");
		}
	
	})
})
