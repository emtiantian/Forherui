$(function(){

	//基础url
	var baseUrl = config.get("baseUrl");
	
	$.ajax({
		type:"post",
		url:baseUrl+"/user/pictureAllow",
		async:true,
		data:{"userId":""},
		dataType:"json",
		success:function(data){
			console.log("接到数据了!");
			console.dir(data);
			initUserLine(data);
		}
	});
	//树形多选初始化
	function initUserLine(data){
		var htmlselect=$("#selectMuban").clone();
		if(data.data.userLine){
			$.each(data.data.userLine,function(i,ele){
				var htmlselect=$("#selectMuban").clone();
				$.each(ele.machine, function(i2,ele2) {
					console.log(ele.line.lineName);
					htmlselect.find("optgroup").attr("label",ele.line.lineName);
					htmlselect.find("optgroup").attr("lineId",ele.line.lineCode);
					if(ele2.select){
						htmlselect.find("optgroup").append('<option value="' + ele2.machineId + '" selected="selected">'+ele2.machineName+'</option>');
					}else{
						htmlselect.find("optgroup").append('<option value="' + ele2.machineId + '">'+ele2.machineName+'</option>');
					}					
				});
				console.log(htmlselect);
				$("#userLine").append(htmlselect.html());
			})
			$('#userLine').multiSelect({
				selectableHeader: "<label>可选线路&机器</label><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
			    selectionHeader: "<label>已选线路&机器</label><input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
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
			data:{"userId":"","machineId":machineIds},
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
	$("#userLineSave").on("click",function(){
		save($('#userLine').val());
	})
	
})
