
	$('.ba-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinity: true,
		// autoplay: true,
		autoplaySpeed: 1000,
		speed: 2000,
		appendDots: '.appenddots',
	});

	$('.life-slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor:'.life-slider-nav'
	});
	$('.life-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.life-slider-big',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		infinity: true,
		arrows: true,
	});

 var map;
 var baOffices;
      function initMap() {
      	var markerBA = {lat: 50.006693, lng: 36.237199};

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.0066429, lng: 36.2366558},
          zoom: 20,
 });
    function newLocation(newLat,newLng){
	map.setCenter({
		lat: newLat,
		lng: newLng
	});
}

};
 const googleMapsScript = document.createElement('script');
 googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAu_qTeVtQzsi87xkRdcjYk7IP4xvDs9bo&callback=initMap";
 document.head.appendChild(googleMapsScript);
