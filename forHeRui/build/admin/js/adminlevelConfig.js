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
			html+='<tr><td>'+ele.name+'</td><td><button id="'+ele.userId+' " userName="'+ele.name+'"  class=" btn btn-primary userSelect" >选择</button></td></tr>';		
		});
		$("#userList").append(html);
		//初始化数据table
		$('#userTable').dataTable( {
        "aaSorting": [[ 0, "asc" ]],
        "oLanguage" : {
                "sLengthMenu": "每页显示 _MENU_ 条记录",
                "sZeroRecords": "抱歉， 没有找到",
                "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
                "sInfoEmpty": "没有数据",
                "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
                "sZeroRecords": "没有检索到数据",
                 "sSearch": "搜索:",
                "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "尾页"
                }
               }
    });
	}
	
	//提交修改
	function save(lines){
		$.ajax({
			type:"post",
			url:baseUrl+"/user/ReciveLines",
			async:true,
			dataType:"json",
			data:{"userId":$("#userId").val(),"lines":lines},
			success:function(data){
				if(data.success){
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
		save($('#userLine').val());
	})
	//初始化用户线路
	function initUserLine(adminLine,data,userName){
		$("#userLine").html("");
		var html=""
		if(adminLine.data){
			//替换为选中用户的数据
			$.each(adminLine.data,function(i,ele){													
				$("#userLine").append("<option value='"+ele.line.lineId+"'> "+ele.line.lineName+"</option>");
			})
			$("#selectUserName").html(userName);
			//遍历用户已经选择的线路 把当前的线路标记为选中
			var optionEle=$("#userLine").find("option");
			$.each(data.data,function(i,ele){
				if(ele.line.select){
					$.each(optionEle, function(i3,ele3) {
							if($(ele3).attr("value") == ele.line.lineId){
								$(ele3).attr("selected","selected");
							}
						});
				}				
			})
			$('#userLine').multiSelect({
				selectableHeader: "<lable>可选线路</lable><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
		    	selectionHeader: "<lable>已选线路</lable><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
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
			});
			$('#userLine').show();
			$("#pictureConfig").show();
		}
	}
	
		//监听选中用户事件
	$(document).on("click",".userSelect",function(){
		//初始化 用户已有线路
		if(!isAjax){
			isAjax=true;
			//保存到 隐藏input中提交修改时使用
			$("#userId").val($(this).attr("id"));
			//
			var userName = $(this).attr("userName")
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
				initUserLine(adminLine,data,userName);
			
//				initLine(adminLine,data);
			}
		});
		}else{
			alert("正在获取数据 请稍后");
		}
	})
})
