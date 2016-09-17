;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    root.showImg = factory();
  }
}(this, function factory(exports) {
	
	function showImg (opts){
  	if (!(this instanceof showImg)) {
      return new showImg(opts);
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
    this.showValue = opts.showValue 
    this.div = opts.div || '<div id="info" class="info"> </div>'
    this.init();
  }
  showImg.prototype.error = function(message) {
    console.log('showImg error: ' + message);
  };
  showImg.prototype.init = function(){
  	
  	this.create()
  }
  showImg.prototype.create = function(){	
  	var self = this;
  	$.each($(this.selector), function(i,ele) {
  		var div = self.div;
  		var innerHtml = "";
//		$.each(self.showValue, function(i2,ele2) {
//			if(!(self.showValue.length) == i2){
//				innerHtml+=ele2.key+":"+$(ele).parent().attr(ele2.value)+",";
//			}else{
//				innerHtml+=ele2.key+":"+$(ele).parent().attr(ele2.value);
//			}
//			
//		});
			console.log(self.showValue);
			innerHtml = $(ele).attr(self.showValue);
  		$(ele).parent().find("#info").remove();	
  		$(ele).parent().append($(div).html(innerHtml));
  	});
  }
  return showImg;
}));