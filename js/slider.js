/* VEGAS Home Slider */
$.vegas('slideshow', {
	  backgrounds:[

		{ src:'img/slider/04.jpg', fade:1000 },
		{ src:'img/slider/03.jpg', fade:1000 },
		{ src:'img/slider/02.jpg', fade:1000 },
		{ src:'img/slider/01.jpg', fade:1000 }
	  ]
	})('overlay', {
	  src:'img/overlays/16.png'
	});
	$( "#vegas-next" ).click(function() {
	  $.vegas('next');
	});
	$( "#vegas-prev" ).click(function() {
	  $.vegas('previous');
});
