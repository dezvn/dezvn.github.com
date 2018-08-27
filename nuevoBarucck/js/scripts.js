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
  //experience
	'use strict';
	// Abandon all hope ye who enter here
	$(document).ready(function() {

	  var navigating = false,
	      curPage = 1,
	      pages = $(".section").length,
	      $sections = $(".sections"),
	      $paginationPage = $(".pagination .page"),
	      $paginationTotal = $(".total-pages"),
	      $textStuff = $(".section-heading, .additional-text");

	  if (pages >= 10) {
	    $paginationTotal.text(pages);
	  } else {
	    $paginationTotal.text("0" + pages);
	  }

	  /*
	  Sets random transition-delay for blocks between 0.4 and 1.2 seconds on every call
	  */
	  function randomDelay() {
	    $(".left-part").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
	    for (var i = 1; i <= pages; i++) {
	      $(".bg-part:nth-child("+i+")").css("transition-delay", (Math.floor(Math.random() * 9) + 4)/10 + "s");
	    }
	  }

	  /* Async hell, with hardcoded numbers.
	  On production, 410 number must be .section-heading transform transition time in miliseconds + 10, but i'm sort of tired of this demo :D
	  */
	  function timeoutNav(t) {
	    var time = t || 2000;
	    $textStuff.addClass("not-visible");
	    setTimeout(function() {
	      navigating = false;
	      randomDelay();
	    }, time);
	    setTimeout(function() {
	      // cached selector not working because of newely created clone when moving up more then 2 positions
	      $(".section-heading, .additional-text").css({"margin-top": 0 - (parseInt($(".nav-elem.active").attr("data-page")) - 1) * 100 + "vh"}).hide();
	    }, 410);
	    setTimeout(function() {
	      $textStuff.show();
	      $textStuff.css("top");
	      $textStuff.removeClass("not-visible");
	    }, time + 10);
	  }

	  function magicStuff(paramPage) {
	    if (paramPage) curPage = paramPage;
	    navigating = true;
	    var calculatedMargin = 0 - (curPage - 1) * 100;
	    $(".bg-part, .left-part").css("margin-top", calculatedMargin +"vh");
	    $(".scroll-down").addClass("removed");
	    if (parseInt($(".nav-elem.active").attr("data-page")) === 1) {
	      $(".scroll-down").removeClass("removed");
	    }
	  }

	  function trickyStuff(page) {
	    $(".left-part, .bg-part").css({"transition-duration": "0s", "transition-delay": "0s"});
	    $(".main").css("top");
	    magicStuff(page);
	    $(".main").css("top");
	    $(".left-part, .bg-part").css("transition-duration", "0.8s");
	    randomDelay();
	  }

	  function pagination(pg) {
	    $(".nav-elem").removeClass("active");
	    $(".nav-" + pg).addClass("active");
	    curPage = pg;

	    if (pages >= 10) {
	      $paginationPage.text(pg);
	    } else {
	      $paginationPage.text("0" + pg);
	    }
	  }

	  function navigateUp() {
	    if (curPage > 1) {
	      curPage--;
	      pagination(curPage);
	      magicStuff();
	      timeoutNav();
	    }
	  }

	  function navigateDown() {
	    if (curPage < pages) {
	      curPage++;
	      pagination(curPage);
	      magicStuff();
	      timeoutNav();
	    }
	  }

	  $(document).on("mousewheel DOMMouseScroll", function(e) {
	    if (!navigating) {
	      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	        navigateUp();
	      } else {
	        navigateDown();
	      }
	    }
	  });

	  $(document).on("mousewheel DOMMouseScroll",
	                 ".sidebar-hover, .sidebar-real",
	                 function(e) {
	    e.stopPropagation();
	  });

	  var sidebarScroll = 0,
	      $navEl =  $(".nav-elem"),
	      $sidebar = $(".sidebar-real"),
	      maxScroll = $navEl.length * $navEl.height() - $(window).height();

	  $(document).on("mousewheel DOMMouseScroll", ".sidebar-real", function(e) {
	    if (navigating) return;
	    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	      if (!sidebarScroll) return;
	      sidebarScroll += 100;
	      if (sidebarScroll > 0) sidebarScroll = 0;
	    } else {
	      if (Math.abs(sidebarScroll) === maxScroll) return;
	      sidebarScroll -= 100;
	      if (Math.abs(sidebarScroll) > maxScroll) sidebarScroll = 0 - maxScroll;
	    }
	    $sidebar.css("transform", "translateY("+ sidebarScroll +"px)");
	  });

	  $(document).on("click", ".nav-elem:not(.active)", function() {
	    if (navigating) return;
	    var activePage = parseInt($(".nav-elem.active").attr("data-page"), 10),
	        futurePage = $(this).attr("data-page");

	    pagination(futurePage);

	    if (Math.abs(activePage - futurePage) > 2) {
	      var $fakePage = $(".section-" + futurePage).clone(),
	          $currentPage = $(".section-" + activePage),
	          fakeNumber = 0;
	      // ugly code, do not enter here
	      if (activePage < futurePage) {
	        // moving down
	        $currentPage.after($fakePage);
	        fakeNumber = activePage + 1;
	        $(".main").css("top");
	        randomDelay();
	        magicStuff(fakeNumber);
	      } else {
	        // moving up (real hell)
	        $currentPage.before($fakePage);
	        fakeNumber = activePage - 1;
	        trickyStuff(activePage + 1);
	        $(".main").css("top");
	        randomDelay();
	        $(".main").css("top");
	        magicStuff(activePage);
	      }
	      timeoutNav(2050);
	      setTimeout(function() {
	        $fakePage.remove();
	        trickyStuff(futurePage);
	      }, 2000);
	    } else {
	      magicStuff(futurePage);
	      timeoutNav();
	    }
	  });

	  $(window).resize(function() {
	    maxScroll = $navEl.length * $navEl.height() - $(window).height();
	    $sidebar.css("transform", "translateY(0)");
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
