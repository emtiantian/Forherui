$(function(){
		
	//基础url
	var baseUrl = config.get("baseUrl");
	//图片宽度
	var imgWidth = config.get("imgWidth");
	//图片高度
	var imgHeight = config.get("imgHeight");


	//生成数据1606301324_bj_test
	var data={
	    "picture": [
	        {
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301324_bj_test.jpg",
	            "id": "picture1",
	            "info": [
	                {
	                    "id": "picture1_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "10%",
	                    "left": "10%"
	                },
	                {
	                    "id": "picture1_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture1_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },
	        {
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301335_bj_test.jpg",
	            "id": "picture2",
	            "info": [
	                {
	                    "id": "picture2_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture2_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture2_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },
	        {
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301344_bj_test.jpg",
	            "id": "picture3",
	            "info": [
	                {
	                    "id": "picture3_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture3_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture3_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },
	        {
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301348_bj_test.jpg",
	            "id": "picture4",
	            "info": [
	                {
	                    "id": "picture4_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture4_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture4_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },
	        {
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301413_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301421_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301459_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301506_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301525_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301647_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301653_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301705_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301715_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        },{
	            "src": "./images/gallery/WT000000000000001/201606/30/1606301726_bj_test.jpg",
	            "id": "picture5",
	            "info": [
	                {
	                    "id": "picture5_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
	                },
	                {
	                    "id": "picture5_tooltip2",
	                    "descr": "sofa: 199$",
	                    "top": "346px",
	                    "left": "483px"
	                },
	                {
	                    "id": "picture5_tooltip3",
	                    "descr": "silver candle: 2.99$",
	                    "top": "461px",
	                    "left": "556px"
	                }
	            ]
	        }
	    ]
	}
	

	function createDate(data){
		//var data=jQuery.parseJSON(data);
		var imgDate=[];		
		$.each(data.picture, function(i,ele) {	
			var html=$("#muban").clone();
			$(html).find(".ip_slide").attr("id",ele.id);
			$(html).find(".ip_tooltipImg").attr("src",ele.src);		
			$.each(ele.info,function(infoI,infoEle){
				var toolip=$("#tooltip").clone();
				$(toolip).find(".ip_tooltip").attr("id",infoEle.id);
				$(toolip).find(".ip_tooltip").css({"top":infoEle.top,"left":infoEle.left});
				$(toolip).find(".xs").html(infoEle.descr);
				$(html).find(".ip_slide").append(toolip.html());				
			})				
			imgDate.push({content:html.html()});
		});
//		console.log(imgDate);
		return imgDate;
	}
	    function mouseOverHandler(selector, animationType) {
	    	console.log("initmouseOverHandler"+selector,+animationType)
	    	
	    	selector.on('touchstart', function(eventObject) {
	    		if($(this).attr("show") == "true"){
	    			hideTooltip($(this), animationType);
	    			$(this).attr("show","false");
	    		}else{
	    			console.log("touchstart");
					showTooltip($(this), animationType);
					$(this).attr("show","true");
	    		}	    						
			});
				
			selector.on('mouseover', function(eventObject) {				
				showTooltip($(this), animationType);
			});
			selector.on('mouseout', function(eventObject) {
				hideTooltip($(this), animationType);
			});
			
		};
		
		function showTooltip(selector, animationType) {
			selector.css('z-index', '9999');
			selector.addClass('show');
			selector.find(".xs").css('display', 'block');
			selector.find(".ip_descr").addClass(animationType);
		};
		
		function hideTooltip(selector, animationType) {
			selector.css('z-index', '1');
			selector.removeClass('show');
			selector.find(".xs").css('display', 'none');
			selector.find(".ip_descr").removeClass(animationType);
		};
		
		
	var IS_IN_IS = new iSlider(document.getElementById('is_in_is'), null, {
        	data:createDate(data),
            isAutoplay: 0,
            isLooping: 1,
            duration: 5000,
            animateTime: 2600,
            isOverspread: 1,
            isDebug:false,
            animateType: 'fade',
            plugins: [['dot', {locate: 'relative'}]],
            oninitialized :function(){
            	var animationType="btt-slide";
				var selector=$(".ip_tooltip");
            	mouseOverHandler(selector, animationType);
            	
//          	console.log("initend");
            },      
            onplugininitialized: function () {
                [].slice.call(this.wrap.querySelectorAll('.islider-dot')).forEach(function (el, i) {
                	var imgurl=$(this.data[i].content).find(".ip_tooltipImg").attr("src");              	
                    el.style.backgroundImage = 'url(' + imgurl + ')';                                      
                }.bind(this));             
            },            
      }); 
    IS_IN_IS.on("slideChanged",function(){
    	var animationType="btt-slide";
		var selector=$(".ip_tooltip");
//  	console.log("onslideChanged");    	
    	mouseOverHandler(selector, animationType);
    	
    })
    //设置图片高度
//  .is-in-is-wrap
	function initPictHeight(){
		var nowWidth=$(".is-in-is-wrap").width();
		$(".is-in-is-wrap").css("height",imgHeight*(nowWidth/imgWidth));
		$("#imgDiv").css("height",imgHeight*(nowWidth/imgWidth)+imgHeight*(nowWidth/imgWidth)*0.12);
	}
    initPictHeight();
    
	//日期初始化
   $('.form_date').datetimepicker({
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
		format: "yyyy-MM-dd"
    });

    
    //window.resize 修改图片大小
    $(window).on("resize",function(){
    	initPictHeight();
    })
})
