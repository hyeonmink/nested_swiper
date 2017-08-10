



/*******************[lock/unlock slides]***************** */	
var swiperH = new Swiper('.swiper-container-h', {
	centeredSlides: true,
	pagination: '.swiper-pagination-h',
	paginationType: 'bullets',
	spaceBetween:0,
	slidesPerView: 2,
	paginationClickable: true,
	slideToClickedSlide: true,
	keyboardControl: true,
	centeredSlides: true,
	followFinger: false,

	// mousewheelControl: true
		
	});
	// swiperH.lockSwipes()


var swiperV = new Swiper('.swiper-container-v', {
	centeredSlides: true,
	pagination: '.swiper-pagination-v',
	slidesPerView: 2,
	direction: 'vertical',
	spaceBetween: 1,
	keyboardControl: true,
	onSlideNextStart: onSlideHandler,
	onSlidePrevStart: onSlideHandler,
	followFinger: false,
	// mousewheelForceToAxis: true
});
	

	swiperH.slideTo(2)
	swiperV[2].slideTo(0)



function onSlideHandler(){
	swiperV.map((d)=>{
		d.slideTo(swiperV[swiperH.activeIndex].activeIndex)
	})
	
}
	// swiperV.disableMousewheelControl();	

	var scroll = 0;
	var controller = new ScrollMagic.Controller();
	var scene1 = new ScrollMagic.Scene({
		triggerElement: "#test .swiper-container-h",
		duration: '100%',
		triggerHook: 0,
	})
	.setPin("#test .swiper-container-h")
	// .addIndicators()
	.addTo(controller)
	.addIndicators()
	.on("leave", ()=>{
		console.log("LEAVE")
		swiperH.lockSwipes();
		swiperH.stopAutoplay();
	})
	.on("enter", (e)=>{
		console.log("ENTER")
		swiperH.unlockSwipes();
		swiperH.startAutoplay();

	// $("#test").on('scroll mousewheel', function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	return false;
	// })

		$("#test").on('scrollup', function(e){
			console.log("?")
		})


	})
	.on("progress", (e)=>{
		if(scroll > e.progress){
			console.log("up")
		} else {
			console.log("down")
		}
		scroll = e.progress
		if(e.progress < .333){
			swiperV.map((d)=>{
				d.slideTo(0)
			})			
		}
		if(e.progress > .333){
			swiperV.map((d)=>{
				d.slideTo(1)
			})
		} if (e.progress > .666){
			swiperV.map((d)=>{
				d.slideTo(2)
			})
		}
		// console.log(e.progress)
	});

/*******Renders random colors to the background color to each box. *******/
var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
swiperV.map((d, i)=>{
	d.slides.map((i, d2)=>{
		// $(d2).css('background-color', CSS_COLOR_NAMES[1*])
		// $(d2).on('click', function(){
		// 	console.log($(this).attr('data'))
		// 	// console.log("click!")
		// })
		$(d2).css('background-color', CSS_COLOR_NAMES[Math.round(Math.random()*CSS_COLOR_NAMES.length)])
	})
})
