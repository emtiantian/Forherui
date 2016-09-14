;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    root.tabTool = factory();
  }
}(this, function factory(exports) {
  'use strict';
  function tabTool (opts){
  	if (!(this instanceof tabTool)) {
      return new Walkway(opts);
    }

    if (typeof opts === 'string') {
      opts = { selector: opts };
    }

    if (!opts.selector) {
      return this.error('A selector needs to be specified');
    }
    if(typeof jQuery =='undefined'){
    	return this.error("jquery 没有找到");
    }
    this.opts = opts
    this.selector = opts.selector
    this.init();
  }
  tabTool.prototype.error = function(message) {
    console.log('tabTool error: ' + message);
  };
  tabTool.prototype.init = function(){
  	var self = this;
  	var eles = document.querySelectorAll(this.selector);
  	eles.forEach(function(ele){
//			ele.style.background = "red";
  			ele.onclick = function(){
  				var tab =  $("li[data-id="+$(this).attr("data-id")+"]",parent.document);	
					 if(tab.length==0){
						 $(".tabLi",parent.document).removeClass("active")
						 if(isIos()){
							 $(".tabUl",parent.document).append('<li class="tabLi active" data-id="'+$(this).attr("data-id")+'"><p class="copyA tagA" onclick="changetab(this)" >'+$(this).attr("data-id")+'</p><span  onclick="closeiframe(this)" class="glyphicon glyphicon-remove" aria-hidden="true" style="position: relative;cursor:pointer;font-size: 1.5em;top: -2.3rem;float:right;"><span></li>'); 
						 }else{
							 $(".tabUl",parent.document).append('<li class="tabLi active" data-id="'+$(this).attr("data-id")+'"><p  class="copyA tagA"onclick="changetab(this)" >'+$(this).attr("data-id")+'</p><span  onclick="closeiframe(this)" class="glyphicon glyphicon-remove" aria-hidden="true" style="position: relative;cursor:pointer;font-size: 18px;top: -1.5em;float:right;"><span></li>');
						 }
			    		
						 $(".iframeContent",parent.document).hide();
			    		 var windowheight = $("#main",parent.document).height()-30;   	    		
			    		 $("#iframeDiv",parent.document).append('<iframe class="iframeContent if_'+$(this).attr("data-id")+'"  frameborder="no" src="'+$(this).attr("data-url")+'" id="iframepage" scrolling="yes" style="width:100%;height:'+windowheight+'px;"onload="changeheight(this)" > </ifranme>');    		
					 }else{
						 self.changetab(tab.find("p"));
					 }
  			}
  	})
  }
  tabTool.prototype.change = function(ele){
  			var li = $(ele).parent();
				var id =li.attr("data-id").replace("#","\\\#");
				$(".tabLi").removeClass("active");
				$(li).addClass("active");
				
				$(".iframeContent").hide();
				$(".if_"+id).show();
  }
  
  
  return tabTool
}));