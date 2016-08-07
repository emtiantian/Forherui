$(function(){

	
    var IS_IN_IS = (function () {
        var data = [];
//      for (var i = 0; i < 9; i++) {
//          data.push({
//              content: '//be-fe.github.io/static/images/saber/' + i + (i < 7 ? '.jpg' : '.gif')
//          });
//      }
		var data=[
			{content: './images/gallery/image1.jpg' },
			{content: './images/gallery/image2.jpg' },
			{content: './images/gallery/image3.jpg' },
			{content: './images/gallery/image4.jpg' },
			{content: './images/gallery/image5.jpg' },
			{content: './images/gallery/image1.jpg' },
			{content: './images/gallery/image2.jpg' },
			{content: './images/gallery/image3.jpg' },
			{content: './images/gallery/image4.jpg' },
			{content: './images/gallery/image5.jpg' },
		]
        var h = new iSlider(document.getElementById('is_in_is'), data, {
            isAutoplay: 0,
            isLooping: 1,
            duration: 5000,
            animateTime: 2600,
            isOverspread: 1,
            animateType: 'fade',
            plugins: [['dot', {locate: 'relative'}]],
            onplugininitialized: function () {
                [].slice.call(this.wrap.querySelectorAll('.islider-dot')).forEach(function (el, i) {
                    el.style.backgroundImage = 'url(' + this.data[i].content + ')';                                      
                }.bind(this));
                [].slice.call(this.wrap.querySelectorAll('.islider-pic')).forEach(function (el, i) {
                    $(el).attr("id","picture"+parseInt(i+1));                                 
                }.bind(this));               
            },            
        });

        h.pause();

        return h;
    })();
    
//  var lsn;
//  function IS_IN_IS_Autoplay(i) {
//      if (lsn) {
//          window.clearInterval(lsn);
//      }
//      var volumeLsn = IS_IN_IS_BGM.volume;
//      if (i === 2) {
//          IS_IN_IS.play();
//          IS_IN_IS_BGM.play();
//          lsn = window.setInterval(function () {
//              var volume = IS_IN_IS_BGM.volume;
//              volume += 0.01;
//              if (volumeLsn === volume || volume >= 1) {
//                  volume = 1;
//                  window.clearInterval(lsn);
//              }
//              volumeLsn = volume;
//              IS_IN_IS_BGM.volume = volume;
//          }, 10);
//      } else {
//          IS_IN_IS.pause();
//          lsn = window.setInterval(function () {
//              var volume = IS_IN_IS_BGM.volume;
//              volume -= 0.01;
//              if (volumeLsn === volume || volume <= 0) {
//                  volume = 0;
//                  window.clearInterval(lsn);
//                  IS_IN_IS_BGM.pause();
//              }
//              volumeLsn = volume;
//              IS_IN_IS_BGM.volume = volume;
//          }, 10);
//      }
//  }
    
    var wt = 0;
    var wft = 0;
    function mouseWheelHandle(evt) {
        var type = evt.type;
        if (type == 'DOMMouseScroll' || type == 'mousewheel') {
            evt.delta = (evt.wheelDelta) ? evt.wheelDelta / 120 : -(evt.detail || 0) / 3;
        }
        if (evt.timeStamp - wt < 100 && evt.timeStamp - wft < 2000) {
            wt = evt.timeStamp;
            return;
        }

        wt = evt.timeStamp;
        wft = evt.timeStamp;

        if (!this.isSliding) {
            if (evt.delta < 0) {
                this.slideNext();
            } else if (evt.delta > 0) {
                this.slidePrev();
            }
        }
    }
	//图片标注
	setTimeout(function(){
		$( "#is_in_is" ).iPicture({
			animation: true,
			animationBg: "bgblack",
			animationType: "ltr-slide",
			pictures: ["picture1","picture2","picture3","picture4","picture5"],
			button: "moreblack",
	//		button:"ip_tooltip",
			moreInfos:{"picture1":[{"id":"tooltip1","descr":"furniture: 299$","top":"185px","left":"393px"},{"id":"tooltip2","descr":"sofa: 199$","top":"346px","left":"483px"},{"id":"tooltip3","descr":"silver candle: 2.99$","top":"461px","left":"556px"}],"picture2":[{"id":"tooltip4","descr":"window","top":"71px","left":"423px"},{"id":"tooltip5","descr":"basket","top":"438px","left":"192px"},{"id":"tooltip6","descr":"hoven","top":"460px","left":"673px"}],"picture3":[{"id":"tooltip7","descr":"Organize the kitchen!","top":"391px","left":"560px"},{"id":"tooltip8","descr":"Hoven: 399$","top":"160px","left":"268px"},{"id":"tooltip9","descr":"chest of drawers","top":"386px","left":"180px"}],"picture4":[{"id":"tooltip10","descr":"pasta maker","top":"277px","left":"672px"},{"id":"tooltip11","descr":"stool","top":"291px","left":"281px"},{"id":"tooltip12","descr":"shelf","top":"144px","left":"579px"},{"id":"tooltip13","descr":"Dishes","top":"183px","left":"181px"}],"picture5":[{"id":"tooltip14","descr":"bed: 199$","top":"398px","left":"351px"},{"id":"tooltip15","descr":"asian style lamp","top":"146px","left":"380px"},{"id":"tooltip16","descr":"console: 105$","top":"273px","left":"567px"}]}
		});
	},5000);
	

})
