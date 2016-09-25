$(function(){
		//基础url
	var baseUrl = config.get("baseUrl");
	//右键菜单class
	var contextClass="context";
	// 机器数据
	var machineList=[];
	//防止重复提交
	var isImgSave = false;
	//当前线路名称
	var lineName = "";
	//
	var expires=config.get("expires");
	//日期初始化
   $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
//		forceParse: 0,
		format: "yyyy-mm-dd",		
   }).on("changeDate",function(ev){
   		ev.date.valueOf()
   		console.log("date"+ev.date.valueOf());
   		console.log("date1"+ $('.form_date').val());
   })
   
   //日期扩展
	Date.prototype.format = function(fmt)   
	{ //author: meizz   
	  var o = {   
	    "M+" : this.getMonth()+1,                 //月份   
	    "d+" : this.getDate(),                    //日   
	    "h+" : this.getHours(),                   //小时   
	    "m+" : this.getMinutes(),                 //分   
	    "s+" : this.getSeconds(),                 //秒   
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
	    "S"  : this.getMilliseconds()             //毫秒   
	  };   
	  if(/(y+)/.test(fmt))   
	    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
	    if(new RegExp("("+ k +")").test(fmt))   
	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	  return fmt;   
	}
	$('.form_date').val(new Date().format("yyyy-MM-dd"));
	function getImgDataforLine(data){
		
	}
	function getImgData(machineid,machineName,dateTime){
		//先隐藏提示
		$("#showImg0").hide();
		
		$.ajax({
			type:"post",
			url:baseUrl+"/picture/show",
			async:true,
			data:{"machineid":machineid,"dateTime":dateTime},
			dataType:"json",
			success:function(data){
				if(data.success){
					//先隐藏
					$('.showImg').hide();
					//删除原来的数据
					$("#container").html("");
					$("#container2").html("");
					$("#container3").html("");
					//初始化页面
					$.each(data.data.picture, function(i,ele) {
						var info = "线路:"+lineName+" 设备："+machineName+" 时间："+ele.time;
						if(i == 0){
							//显示菜单
							initShow1(ele,true,info)
							initShow2(ele,true,true,info)
							initShow3(ele,true,info)
						}else{
							initShow1(ele,true,info)
							initShow2(ele,true,false,info)
							initShow3(ele,true,info)
						}				
					});
					//初始化显示
					//第1种展示
					waterFlow("container", "box");
					
					//第2种展示
					suningImages().init();	
					//第3种展示
					$.each($(".draggie"), function(i,ele) {
						initDraggie(ele);
					});	
					//添加底部说明
					var info = new showImg({
						selector:".imgInfo",
						showValue:"info"
					})
					//显示控制
					$(".mySummary").on("click",function(){
	//					console.log("click"+$(this).attr("data"))
						if(!$("#showImg0").is(":hidden")){
							console.log("当前没有图片不切换")
						}else{
							$('.showImg').hide();
							//替换显示图片						
							$("#"+$(this).attr("data")).show();
							changeImg($(this));
						}																	
					})
					//默认显示第一个
					if(!$("#showImg0").is(":hidden")){
						console.log("当前没有图片应该不显示第一种展示")
						changeImg("");
					}else{
						$("#showImg1").show();
						changeImg($(".mySummary[data =showImg1]"));
//						console.log("1111111"+$("#container").width());
					}					
				}else{
					dataError(data);
				}
			
			}
		});
	}
	//第一种展示初始化
//	$("#container").html("");
//	$("#container2").html("");
//	$("#container3").html("");

	function initShow1(data,isShowMenu,info){
		var width = show1Width(3);
		if(isShowMenu){
			$("#container").append('<div class="box"><div class="boximg '+contextClass+'" imgId="'+data.id+'"> <img src="'+data.url+'"   info="'+info+'" class="imgClick imgInfo" style="width:'+width+'px;" ></div></div>');	
		}else{
			$("#container").append('<div class="box"><div class="boximg '+contextClass+'" imgId="'+data.id+'"> <img src="'+data.url+'" info="'+info+'" class="imgClick imgInfo" ></div></div>');	
		}
								   
	}
	
	function initShow2(data,isShowMenu,isFirst,info){
		if(isFirst){
//			$("#container2").append('<li class="'+contextClass+'" data-imgId="'+data.id+'"><a href="#" class="on"><img src="'+data.src+'" /></a></li>');
			$("#container2").append('<li><a href="#" class="on" ><img src="'+data.url+'" imgId="'+data.id+'" info="'+info+'"  /></a></li>');
			$("#bigpics").attr("class","image "+contextClass);
			$("#bigpics").find("img").attr("src",data.url)
			$("#bigpics").find("img").attr("class","imgClick imgInfo");		
			$("#bigpics").attr("imgId",data.id)
			$("#bigpics").find("img").attr("info",info);
		}else{
			$("#container2").append('<li><a href="#" ><img src="'+data.url+'" imgId="'+data.id+'" info="'+info+'"/></a></li>');
		}
		
	}
	
	function initShow3(data,isShowMenu,info){
		if(isShowMenu){
			$("#img1").parent().attr("class",contextClass);
			$("#img2").parent().attr("class",contextClass);
		}	
		$("#container3").append('<li ><a class="draggie"><img src="'+data.url+'" imgId="'+data.id+'" info="'+info+'"/></a></li>');	
	}
	//初始化 线路列表
	function initLineList(userId){
		$.ajax({
			type:"post",
			url:baseUrl+"/Line/lineList",
			async:true,
			data:{"userId":userId},
			dataType:"json",
			success:function(data){
				if(data.success){
					//初始化下拉菜单
					initSelect(data);
					//初始化 图片展示
//					if($("#machineList").val() == "" || $("#machineList").val() == undefined || $("#machineList").val() == null){
//						alert("没有权限查看任何线路");
//						return;
//					}
					getImgData($("#machineList").val(),$("#date").val());
					//初始化菜单
					//管理员可用
					if($("#loginUserLevel").val() == "superAdmin" || $("#loginUserLevel").val() == "admin" || $("#loginUserLevel").val() == "lineAdmin" ){
						context.init({
						  fadeSpeed: 100,
						  filter: function ($obj){},
						  above: 'auto',
						  preventDoubleContext: true,
						  compress: false
						});
						context.attach('.context',[{
							  header: '图片标注'
							},{
						
						    text: '图片标注',
						    action: function(e,selector){
						    	console.log(context.thisSelf());
						    	console.log("imgId"+$(context.thisSelf()).attr("imgId"));
						    	//点击菜单初始化 画板 并修改canvas 宽高
						    	console.log(getImgNaturalStyle($(context.thisSelf()).find("img")[0]));
						    	var imgNatural = getImgNaturalStyle($(context.thisSelf()).find("img")[0])
						    	//重置宽高
						    	$("#myCanvas").attr("width",imgNatural[0])
						    	$("#myCanvas").attr("height",imgNatural[1])
						    	$("#myCanvas").css("width",imgNatural[0]);
						    	$("#myCanvas").css("height",imgNatural[1]);
						  
						    	$(".ui-wrapper").css("width",imgNatural[0]);
						    	$(".ui-wrapper").css("height",imgNatural[1]);
//								var canvasDiv = document.getElementById("myCanvas");
//								canvasDiv.width = imgNatural[0]
//								canvasDiv.height = imgNatural[1]
								
						    	var canvas = mycanvas();
						    	//替换画板中的图片 和 图片id
						    	canvas.initImg($(context.thisSelf()).attr("imgId"),$(context.thisSelf()).find("img").attr("src"));
						    	$("#tools_save").click(function(){	
						    		console.log(canvas.save());
						    		saveImg(canvas.save());
						    	});
						    	
						    	e.preventDefault();
						    }
						}] );
					}
				}else{
					dataError(data);
				}				
			}
		});
	}
	//获得图片宽高
	      function getImgNaturalStyle(img,callback) {
                var nWidth, nHeight
                if (img.naturalWidth) { // 现代浏览器
                    nWidth = img.naturalWidth
                    nHeight = img.naturalHeight
                } else {  // IE6/7/8
                    var imgae = new Image();
                    image.src = img.src;
                    image.onload = function(){
                        callback(image.width, image.height)
                    }
                }
                return [nWidth, nHeight]
            }
	
	//初始化 下拉列表
	function initSelect(data){
		$("#lineList").html("");
		$("#machineList").html("");
		$.each(data.data, function(i,ele) {
			if( i== 0 ){
				$("#lineList").append('<option selected="selected" value="'+ele.lineid+'">'+ele.name+'</option>')
			}else{
				$("#lineList").append('<option  value="'+ele.lineid+'">'+ele.name+'</option>')
			}
			machineList.push({"lineid":ele.lineid,"machine":ele.machine})
		});
//		console.log("lineList"+$("#lineList").val());
		changeList(machineList,$("#lineList").val());
		//连级下拉框
		$("#lineList").on("change",function(){
			changeList(machineList,$(this).val());
		})
	}
	//2级联动
	function changeList(machineList,lineid){
		$("#machineList").html("");
		$.each(machineList,function(i,ele){
			if(ele.lineid == lineid){
				$.each(ele.machine,function(i2,ele2){
					if( i2 == 0 ){
						$("#machineList").append('<option selected="selected" value="'+ele2.machineId+'">'+ele2.machineName+'</option>')
					}else{
						$("#machineList").append('<option  value="'+ele2.machineId+'">'+ele2.machineName+'</option>')
					}
				});				
			}					
		});
	}
	function saveImg(data){
		if(!isImgSave){
			isImgSave = true
			$.ajax({
				type:"post",
				url:baseUrl+"/picture/infoEdit",
				async:true,
				data:data,
				dataType:"json",
				success:function(d){
					if(d.success){
						//替换图片
						$("#container").find("[imgId |= "+data.imgId+"]").find("img").attr("src",d.data.url);				
						$("#container2").find("[imgId |= "+data.imgId+"]").find("img").attr("src",d.data.url);
						$("#container3").find("[imgId |= "+data.imgId+"]").find("img").attr("src",d.data.url);
						isImgSave = false
						alert("修改成功");
					}else{
						dataError(d);
					}
				}
			});
		}else{
			alert("正在修改请稍后");
		}
		
	}
	
	
	
	//第一种显示
	function waterFlow(parent, chirld){
	    var wparent = document.getElementById(parent);//获取父级div, 最外级容器
	    var allArr = getAllChirld(wparent,chirld);//获取到所有的class为box的容器div
	    var wscreenWidth = document.documentElement.clientWidth;//获取屏幕宽度
	    var wchirldWidth = wparent.getElementsByTagName("*");//获取所有的标签
	    if(wchirldWidth[0] == undefined){
	    	$("#showImg0").show();
//	    	alert("数据有误");
	    }else{
		    var num = Math.floor(wscreenWidth/wchirldWidth[0].offsetWidth);//这是一个Math算法, 目的是将小数转变为整数,
		    // 从而可以知道每行最多容纳几张图片
		    wparent.style.cssText = 'width:'+wchirldWidth[0].offsetWidth*num+'px;margin:0 auto';//固定每行摆放个数 和上下左右边距
		    //获得每行的最小高度
		    getMinHeightOfCols(allArr, num);
	    }
	    
	}
	function getAllChirld(parent,classname){
	    //获取所有的标签
	    var wchirld = parent.getElementsByTagName("*");
	    //创建数组
	    var chirldArr = [];
	    //遍历wchirld, 将其中className等于classname(传进来的参数)相同的标签放入数组chirldArr中
	    for(var i = 0; i<wchirld.length; i++){
	        if(wchirld[i].className==classname){
	            //因为是位push所以没放进去一个, 都是在数组的最后一个
	            chirldArr.push(wchirld[i]);
	        }
	    }
	    //返回该数组
	    return chirldArr;
	}
	function getMinHeightOfCols(chirdArr, num){
	    //创建数组, 用来盛放每一行的高度
	    var onlyOneColsArr = [];
	    for(var i = 0; i<chirdArr.length; i++){
	
	        if(i<num){
	            //num为传进来的参数, 即为每行放图片的张数, 此步骤的目的是为了将第一行每张图片的高度遍历出来存放如新数组
	            onlyOneColsArr[i]=chirdArr[i].offsetHeight;
	        } else {
	            //当大于每行存放的图片个数时进入该方法, Math.min.apply这个方法是为了得到数组中的最小值
	            var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);
	            //此方法的目的是为了得到最小高度图片的下表, 也就是在每行的第几张, 具体方法见下面
	            var minHeightOfindex = getminIndex(onlyOneColsArr, minHeightOfCols);
	            //定义布局方式为绝对布局
	            chirdArr[i].style.position = "absolute";
	            //得到下一行图片应放的高度
	            chirdArr[i].style.top = minHeightOfCols + "px";
	            //得到下一行图片应放于那个位置
	            chirdArr[i].style.left = chirdArr[minHeightOfindex].offsetLeft + "px";
	            //将两张图片高度相加得到一个新的高度用来进行下一次的计算
	            onlyOneColsArr[minHeightOfindex] += chirdArr[i].offsetHeight;
	        }
	    }
	
	}
	//此方法是为了进行最小高度下标的确定
	function getminIndex(onlyOneColsArr, min){
	    //遍历传进来的高度数组
	        for(var i in onlyOneColsArr){
	            //如果高度等于最小高度, 返回i即为该图片下标
	            if(onlyOneColsArr[i] == min){
	                return i;
	            }
	        }
	}
	
	//第3种显示
		function initDraggie(ele){
			var draggie = new Draggabilly(ele,{
				containment:".draggieSwitch"
			});
			draggie.on( 'dragEnd', function(event, pointer, moveVector) {
				console.dir(pointer);
			  console.log( 'dragEnd', pointer.pageX, pointer.pageY );		  
			  if(istrue("img1Div",pointer)){
			  	tihuan(this,"img1Div");
			  }
			  if(istrue("img2Div",pointer)){
			  	tihuan(this,"img2Div");
			  }
			});
		}
		//判断是否到达位置
		function istrue(id,pointer){
			var x = $('#'+id).offset().left; 
			var y = $('#'+id).offset().top; 
			var width= $('#'+id).width();
			var height=$('#'+id).height();
			console.log("x"+x+"y"+y+"width"+width+"height"+height);
			if(pointer.pageX>x&&pointer.pageX<x+width&&pointer.pageY>y&&pointer.pageY<y+height){
				console.log("拖动到了");
				return true;
			}else{
				return false;
			}
			
		}
		//替换img
		function tihuan(minImg,maxImg){	
			console.dir(minImg.element);
			$("#"+maxImg).parent().css("min-height",0);
			$("#"+maxImg).css("min-height",0);
//			console.log($(minImg.element).find("img").attr("src"));
			$("#"+maxImg).find("img").attr("src",$(minImg.element).find("img").attr("src")).attr("info",$(minImg.element).find("img").attr("info"));
			$("#"+maxImg).attr("imgId",$(minImg.element).find("img").attr("imgId"));
			$("#"+maxImg).css("background","none");			
			$("#"+maxImg).find("#info").html($(minImg.element).find("img").attr("info")).show();
			minImg.destroy();
			setTimeout(function(){
				$(minImg.element).attr("style"," ");
				setTimeout(function(){
					initDraggie(minImg.element);
				},300);				
			},500);			
		}
		//替换图标
		function changeImg(ele){
			
			//隐藏
			$.each($(".mySummary"),function(i,ele1){
				$(ele1).find("img").attr("src",$(ele1).find("img").attr("src").replace("_1","_2"));
			});
			//显示
			$(ele).find("img").attr("src",$(ele).find("img").attr("src").replace("_2","_1"));
			
		}
		//初始化第一种展示 为给定个数
		function show1Width(num){
			var width = $("#container").parent().parent().parent().parent().parent().parent().width()-60;
//			console.log($("#container").parent().parent().parent().parent().parent().parent().width());
//			console.log("width"+width);
			var imgWidth = parseInt((width - 11*2-11*(num-1)*2)/num );	
			return  imgWidth;
		}
		//获取页面参数	
		function GetQueryString(name)
		{
		     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		     var r = window.location.search.substr(1).match(reg);
		     if(r!=null)return  unescape(r[2]); return null;
		}
//{
//	"success": true,
//	"code": 0,
//	"msg": "",
//	"data": {
//		"picture": [{
//			"machine": {
//				"machineId": 10,
//				"code": "bj_test1",
//				"machineName": "等到"
//			},
//			"picture": {
//				"id": 31,
//				"pictureWidth": 908,
//				"pictureHeight": 908,
//				"size": 167799,
//				"url": "../UpLoad/Modify/bj_test1/201609/201609141724.jpg",
//				"time": "2016-09-14T17:00:04",
//				"info": null
//			}
//		}, {
//			"machine": {
//				"machineId": 4,
//				"code": "bj_test",
//				"machineName": "测试设备"
//			},
//			"picture": null
//		}]
//	}
//}		
		function getLineName(lineId){
			var lineName = "";
			$.ajax({
				type:"post",
				url:baseUrl+"/Line/lineList",
				async:false,
				data:{"userId":$("#loginUserId").val()},
				dataType:"json",
				success:function(data){
					if(data.success) {
						$.each(data.data, function(i, ele) {
							if(ele.lineid == lineId){
								lineName = ele.name;	
								
							}						
						})
					} else {
						
					}
				}
			});
			return lineName;
		}
		function initall(lineId){
			$.ajax({
				type:"post",
				url:baseUrl+"/picture/showline",
				async:true,
				data:{"lineId":lineId},
				dataType:"json",
				success:function(data){
					$(".myPanel-body").html("");
					//先隐藏提示
					$("#showImg0").hide();
					//先隐藏
					$('.showImg').hide();
					//删除原来的数据
					$("#container").html("");
					$("#container2").html("");
					$("#container3").html("");
					$(".myPanel-body").append('<button class="btn btn-info machineButton" type="button" style="width: 61px;" id="all" data="all">全部</button>');
					lineName  =  getLineName(lineId);
					$.each(data.data.picture,function(i,ele){
						//添加按钮						
						$(".myPanel-body").append('<button class="btn btn-default machineButton" type="button" data="'+ele.machine.machineId+'">'+ele.machine.machineName+'</button>')	
						if(ele.picture !== null){
							var info = "线路:"+lineName+" 设备："+ele.machine.machineName+" 时间："+ele.picture.time;
							//初始化图片
//							console.dir($("#lineid"+lineId));
							if(i == 0){
								//显示菜单
								initShow1(ele.picture,true,info)
								initShow2(ele.picture,true,true,info)
								initShow3(ele.picture,true,info)
							}else{
								initShow1(ele.picture,true,info)
								initShow2(ele.picture,true,false,info)
								initShow3(ele.picture,true,info)
							}
						}else{
//							console.log('picture为空');
						}
					})
					//记录点击了那个按钮啊
					if($.cookie("usermachine") != "null" && $.cookie("usermachine") != undefined ){	
						console.dir($(".machineButton"));
						$('.machineButton').each(function (i,ele) {  
					       console.log($.cookie("usermachine") +":"+$(ele).attr("data"));
							if($(ele).attr("data") == $.cookie("usermachine")){
								console.log($(ele).attr("data"));
								if($.cookie("usermachine") == "all"){
									
								}else{
									$(ele).click();
								}								
							}
					   });  				
					}
					//初始化显示
					//第1种展示
					waterFlow("container", "box");
					
					//第2种展示
					suningImages().init();	
					//第3种展示
					$.each($(".draggie"), function(i,ele) {
						initDraggie(ele);
					});	
					//添加底部说明
					var info = new showImg({
						selector:".imgInfo",
						showValue:"info"
					})
					//显示控制
					$(".mySummary").on("click",function(){
	//					console.log("click"+$(this).attr("data"))
						if(!$("#showImg0").is(":hidden")){
							console.log("当前没有图片不切换")
						}else{
							$('.showImg').hide();
							//替换显示图片						
							$("#"+$(this).attr("data")).show();
							changeImg($(this));
						}																	
					})
					//默认显示第一个
					if(!$("#showImg0").is(":hidden")){
						console.log("当前没有图片应该不显示第一种展示")
						changeImg("");
					}else{
						$("#showImg1").show();
						changeImg($(".mySummary[data =showImg1]"));
						//console.log("1111111"+$("#container").width());
					}
					
					//右键菜单初始化
					if($("#loginUserLevel").val() == "superAdmin" || $("#loginUserLevel").val() == "admin" || $("#loginUserLevel").val() == "lineAdmin" ){
						context.init({
						  fadeSpeed: 100,
						  filter: function ($obj){},
						  above: 'auto',
						  preventDoubleContext: true,
						  compress: false
						});
						context.attach('.context',[{
							  header: '图片标注'
							},{
						
						    text: '图片标注',
						    action: function(e,selector){
						    	console.log(context.thisSelf());
						    	console.log("imgId"+$(context.thisSelf()).attr("imgId"));
						    	//点击菜单初始化 画板 并修改canvas 宽高
						    	console.log(getImgNaturalStyle($(context.thisSelf()).find("img")[0]));
						    	var imgNatural = getImgNaturalStyle($(context.thisSelf()).find("img")[0])
						    	//重置宽高
						    	$("#myCanvas").attr("width",imgNatural[0])
						    	$("#myCanvas").attr("height",imgNatural[1])
						    	$("#myCanvas").css("width",imgNatural[0]);
						    	$("#myCanvas").css("height",imgNatural[1]);
						  
						    	$(".ui-wrapper").css("width",imgNatural[0]);
						    	$(".ui-wrapper").css("height",imgNatural[1]);
//								var canvasDiv = document.getElementById("myCanvas");
//								canvasDiv.width = imgNatural[0]
//								canvasDiv.height = imgNatural[1]
								
						    	var canvas = mycanvas();
						    	//替换画板中的图片 和 图片id
						    	canvas.initImg($(context.thisSelf()).attr("imgId"),$(context.thisSelf()).find("img").attr("src"));
						    	$("#tools_save").click(function(){	
						    		console.log(canvas.save());
						    		saveImg(canvas.save());
						    	});						    	
						    	e.preventDefault();
						    }
						}] );
					}
				}
			});
		}
	
		//根据当前登录人 初始化 线路列表 及 图片	 和菜单
//		initLineList($("#loginUserId").val());
		//根据页面参数初始化  设备列表 及图片 和菜单		
		var myurl=GetQueryString("lineId");		
		if(myurl !=null && myurl.toString().length>0)
		{	
		   initall(GetQueryString("lineId"));
		}else{
			console.log("获取页面参数失败")
		}
		
		
//		$("#seachImg").on("click",function(){
//			//重新初始化 图片
//			getImgData($("#machineList").val(),$("#date").val());
//			
////			new Date().format("yyyy-MM-dd")
//		})
		$(document).on("click",".machineButton",function(e){
			if($(e.target).attr("data") == "all"){
				console.log("11");
				location.reload();
				$.cookie("usermachine","all",{expires:expires,path:"/"})
			}else{
				$.each($(".machineButton"),function(i,ele){
					if($(ele).attr("data") != "all"){
						$(ele).attr("class","btn btn-default machineButton")
					}else{
						$(ele).attr("class","btn btn-all machineButton")
					}
					
				})
				$(e.target).attr("class","btn btn-info machineButton");
				getImgData($(e.target).attr("data"),$(e.target).html(),new Date().format("yyyy-MM-dd"));
				$.cookie("usermachine",$(e.target).attr("data"),{expires:expires,path:"/"})
			}
			
		})
		
		window.onresize=function(){
			var width = show1Width(3);
			$.each($("#container").find("img"),function(i,ele){
				$(ele).css("width",width);
			})
			
		}
		$(document).on("click",".imgClick",function(){
			if($(this).attr("src") == null || $(this).attr("src") == undefined ){
				
			}else{
				//window.open($(this).attr("src"));
				new imgBack({
					selector:"1",
					ele:$(this),
				});
			}			
		})
		
		$(".toggle-btn").on("click",function(){
//			console.log("11")
			var width = show1Width(3);
			$.each($("#container").find("img"),function(i,ele){
				$(ele).css("width",width);
			})
//			console.log($(".myState-info").css("margin-right"));
			if($(".myState-info").css("margin-right") == "255px"){
				$(".myState-info").css("margin-right",67);
			}else{
				$(".myState-info").css("margin-right",255);
			}
			
		})
		if($.cookie("userlineid") == GetQueryString("lineId")){
			
		}else{
			$.cookie("userlineid",GetQueryString("lineId"),{expires:expires,path:"/"})
			$.cookie("usermachine","null",{expires:expires,path:"/"})
		}
		
		
  		
  		//修改下方图片位置
  		setInterval(function(){
  			$(".myPanel").height();
  			$(".wrapperIndex ").css("padding-top",$(".myPanel").height());
  		},500)
  		
})
