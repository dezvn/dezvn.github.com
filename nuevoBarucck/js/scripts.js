// JavaScript for wave
(function($) {
$(document).ready(function() {
	"use strict";


		// Scroll down opacity
		var divs = $('.slider-inner');
		$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		divs.css({ 'opacity' : (1 - st/700) });
		});



        //moveright
        $("#move-right").on("click", function(){
        	fullpage_api.moveSlideRight();
        })
		// Litebox
		$( '.swipebox' ).swipebox();



		// Parallax effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
		});



		// Counter
		$('.counter').counterUp({
            delay: 10,
            time: 1000
        });



		// Hamburger Menu
		$('.hamburger-menu').on('click', function(e) {
		$(".hamburger-menu").toggleClass("menu-open");
		$(".navigation").toggleClass("show-me");
		$(".navigation ul li").toggleClass("show-me");
		});

		//hover
		$("h3.hover").hover(function () {

				$(".section .slide").css({
					"transform": "scale(0.95)",
				  "background": "#EFEFEF",
				  "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
					"-webkit-box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
					"-moz-box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
					"-ms-box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"

				});
		}, function(){
			$(".section .slide").css({
				"border-radius": "15px",
				"transform": "scale(1)",
				"transition": "all ease-in-out 0.7s"
			});

		});

    //show in MOVIL
      // if ($(window).width() < 800) {

            //  $('.hamburger-menu').removeClass("hide");
						//	$("#ocultar-menu-desktop").addClass("hide");

      // }else {
			//	 $('.hamburger-menu').addClass("hide");
 			//	$("#ocultar-menu-desktop").removeClass("hide");
      // }


  //Mouse
//	$('.tp-leftarrow.default, .tp-righttarrow.default	').mouseover(function(){
//  $(this).css({cursor: 'none'});
//});
//$('.tp-leftarrow.default').on('mousemove', function(e){
//  $('#cursor').css({
//    left:  e.pageX,
  //  top:   e.pageY,
//  });
//});

//section slider

		// Page transition
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("show-me");
	    });


		// Transition delay
		$('.transition').on('click', function(e) {
    	e.preventDefault();
    	var goTo = this.getAttribute("href");
		setTimeout(function(){
         window.location = goTo;
    	},1000);
		});



		// Hide Fixed Slider
		$(window).on("scroll touchmove", function () {
		$('.slider .slider-inner').toggleClass('hide', $(document).scrollTop() > 1500);
		});


		});


		// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       50
      	}
    	);
    	wow.init();




		// Masonry
		$(window).load(function(){
		var $container = $('.portfolio-masonry');
		$container.masonry({
		  columnWidth: 0,
		  itemSelector: '.portfolio-masonry li'
		});
		});


	})(jQuery);
