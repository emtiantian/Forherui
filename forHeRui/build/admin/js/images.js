﻿// Download by http://www.jb51.net
var suningImages = function(){
	var box = $('#bigpics');
	var image = $('#pics');
	var btn = image.find('li');
	var len = btn.length ;
	var ul = image.find('ul');
	
	return{
		init:function(id){
//			console.dir(image)
			if(id != undefined){
				image = $("#"+id);
				ul = image.find('ul');
				btn = image.find('li');
			}		
//			console.dir(image)
			var that = this ;
			var posx ;
			var posy ;
			var i = 0 ;
			ul.css('width',(len+1)*86);
			image.prev('div').click(function(e){
				//alert($(this));
				if(i<=0){
					return false;
				}
				i--;
				that.scroll(i);
				e.preventDefault();
			})
			
			image.next('div').click(function(e){
				if(i>= parseInt(len/7) || len<=7 ){
					return false;
				}
				i++;	
				that.scroll(i);
				e.preventDefault();
			})
			
			
			btn.each(function(i){
				$(this).find('a').click(function(e){
					index = i ;							 
					that.addbk(i);
					that.loadimg(i);
					e.preventDefault();
				})
			})
			
			
			var index = 0 ;
			$(box).parent().parent().find("#next").click(function(){
				index++;
					if(index>=len)
					{
						index=0;
						ul.stop().animate({marginLeft: 0 },300);
					}
					that.next(index);
			})
			$(box).parent().parent().find("#prev").click(function(){
				index--;
					if(index<0){
						index=len-1;
						ul.stop().animate({marginLeft: -86*parseInt(index/7)*7 },300);
					};
					that.prev(index);
			})
//			box.click(function(e){
//				var e = e || window.event ;
//				posx = e.clientX ;
//				//判断鼠标位置，鼠标位置大于图片1/2处加
//				if(posx>document.documentElement.clientWidth/2){
//					index++;
//					if(index>=len)
//					{
//						index=0;
//						ul.stop().animate({marginLeft: 0 },300);
//					}
//					that.next(index);
//				}else{
//					index--;
//					if(index<0){
//						index=len-1;
//						ul.stop().animate({marginLeft: -86*parseInt(index/7)*7 },300);
//					};
//					that.prev(index);
//				}	
//				e.preventDefault();
//			}).mousemove(function(e){
//				var e = e || window.event ;
//				posx = e.clientX ;
//				if(posx>document.documentElement.clientWidth/2){
//					box.css('cursor','url(images/next.cur),pointer');
////					console.log("下一页");
//					box.attr('title','下一页');
//				}else{
//					box.css('cursor','url(images/pev.cur),pointer');
////					console.log("上一页");
//					box.attr('title','上一页');
//				}
//			});
			
			$(document).keyup(function(e){
				var e = e || window.event ;
				if(e.which == 39){
					index++;
					if(index>=len){
						index=0;
						ul.stop().animate({marginLeft: 0 },300);
					}
					that.next(index);
					
				}else if(e.which== 37 ){
					index--;
					if(index<0){
						index=len-1;
						ul.stop().animate({marginLeft: -86*parseInt(index/7)*7 },300);
					};
					that.prev(index);
				}
			});
			
		},
		loadimg:function(i){
			box.html('<div class="loading"></div>');
			var src = btn.eq(i).find('img').attr('src');
			var imgId = btn.eq(i).find('img').attr('imgId');
			var imgInfo =  btn.eq(i).find('img').attr('Info');
//			var maxlen = src.length ;
//			newsrc = src.slice(0,maxlen-4)+"f.jpg";
			$("#bigpics").attr('imgId',imgId);
		
			newsrc = src;
			box.html('<img src = ' +newsrc+'  class="imgClick imgInfo" info= "'+imgInfo+'" /><div id="info" class="info"> '+imgInfo+'</div>' ).find('img').hide();
			box.find('img').fadeIn(250);
			
		},
		addbk:function(i){
			btn.eq(i).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
		},
		scroll:function(i){
			ul.stop().animate({marginLeft: -86*7*i },300);
		},
		next:function(index){
			var that = this ;
			if(((index)%7)==0){
				ul.stop().animate({marginLeft: -86*(index) },300);
			}
			that.addbk(index);
			setTimeout(function(){that.loadimg(index);},400);
		},
		prev:function(index){
			var that = this ;
			if((index+1)%7==0){
				ul.stop().animate({marginLeft: -86*parseInt(index/7)*7 },300);
			}
			that.addbk(index);
			setTimeout(function(){that.loadimg(index);},400);
		}
	}
}
$(document).ready(function(){
//	suningImages().init();	
})
