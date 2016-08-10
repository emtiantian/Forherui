$(function(){
	var data={
	    "picture": [
	        {
	            "src": "./images/gallery/image1.jpg",
	            "id": "picture1",
	            "info": [
	                {
	                    "id": "picture1_tooltip1",
	                    "descr": "furniture: 299$",
	                    "top": "185px",
	                    "left": "393px"
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
	            "src": "./images/gallery/image2.jpg",
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
	            "src": "./images/gallery/image3.jpg",
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
	            "src": "./images/gallery/image4.jpg",
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
	            "src": "./images/gallery/image5.jpg",
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
	        },
	    ]
	}
	var pictures=[];
	var info="";
	function init(data){		
		var html=$("#muban").clone();
		$.each(data.picture, function(i,ele) {
			pictures.push(ele.id);
			$(html).find(".slide").find("div").attr("id",ele.id).css("background","url('"+ele.src+"') no-repeat scroll 0 0 #393737");			
			$("#iPicture").append($(html).html());
		});
		console.dir(pictures);
		
	}
	init(data);
	$( "#iPicture" ).iPicture({
		animation: true,
		animationBg: "bgblack",
		animationType: "ltr-slide",
		pictures: pictures,
		button: "moreblack",
		moreInfos: data.picture,
		modify: true,
		initialize: false
	});
	
  var currentPosition = 0;
  var slideWidth = 1000;
  var slides = $('.slide');
  var numberOfSlides = slides.length;

  // Remove scrollbar in JS
  $('#iPicture').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  $('#slideshow')
    .prepend('<span class="control" id="leftControl" title="go to previous picture">Clicking moves left</span>')
    .append('<span class="control" id="rightControl" title="go to next picture">Clicking moves right</span>');

  // Hide left arrow control on first load
  manageControls(currentPosition);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
	currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
    
	// Hide / show controls
    manageControls(currentPosition);
    // Move slideInner using margin-left
    $('#slideInner').animate({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });

  // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position){
    // Hide left arrow if position is first slide
	if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
	// Hide right arrow if position is last slide
    if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
  }
  
  

})
