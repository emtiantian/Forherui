;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    root.imgBack = factory();
  }
}(this, function factory(exports) {
	function imgBack (opts){
	  	if (!(this instanceof imgBack)) {
	      return new imgBack(opts);
	    }
	
	    if (typeof opts === 'string') {
	      opts = { selector: opts };
	    }
	
	    if (!opts.selector) {
	      return this.error('至少有一个选择器');
	    }
	    if(typeof jQuery =='undefined'){
	    	return this.error("jquery 没有找到");
	    }
	    this.opts = opts
	    this.selector = opts.selector
	    this.ele = opts.ele
	    this.init();
	};
	imgBack.prototype.error = function(message) {
    console.log('imgBack error: ' + message);
  	};
  	imgBack.prototype.init =  function(){
  		console.dir($("#fixedDiv"));
  		 if($("#fixedDiv") == undefined || $("#fixedDiv").length == 0 ){
  		 	console.log("开始")
  		 
  		 	this.create(this.ele);
  		 }else{
  		 	console.log("替换")
  		 	this.changeImg(this.ele);	 	 
  		 }
  	}
  	imgBack.prototype.create = function(ele){
  		var src = $(ele).attr("src");
  		$(document.body).append('<div id="fixedDiv" class="fixedDiv"><div class="fixedModal"><div class="modal-content">'+
  											'<div class="fixedClose" id="fixedClose"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></div>'+
											'<img src="'+src+'" width="100%"/>	</div></div></div>');
				//							
				$(document).on("click","#fixedDiv",function(){
					//只监听当前 
				        if(event.target == this)
				        {
				            $('#fixedDiv').hide();
				        }			  
				})
				$(document).on("click","#fixedClose",function(){
					//只监听当前 			        
				    $('#fixedDiv').hide();		  
				})	
				$("#fixedDiv").show();
  	}
  	imgBack.prototype.changeImg = function(ele){
  		$("#fixedDiv").find("img").attr("src",$(ele).attr("src"));
  		$("#fixedDiv").show();
  	}
  	
	return imgBack;
}))