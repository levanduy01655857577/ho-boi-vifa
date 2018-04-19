$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 200}, 500, 'linear');
  });
});

//Co dinh menu top khi scroll xuong
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > 40) {
		jQuery(".menuTop").addClass("menuTopFixed animated bounceInDown");
		jQuery(".wrapBtnSearch").addClass("wrapBtnSearchFixed animated slideInLeft");
		jQuery(".wrapSocial").addClass("wrapSocialFixed animated slideInRight");
	}
	else {
		jQuery(".menuTop").removeClass("menuTopFixed animated bounceInDown");
		jQuery(".wrapBtnSearch").removeClass("wrapBtnSearchFixed animated slideInLeft");
		jQuery(".wrapSocial").removeClass("wrapSocialFixed animated slideInRight");
	}
});

// Wow
new WOW().init();

//Slide san pham duoc quan tam nhieu
$('#showSlideProduct').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: '<button type="button" class="btnPrevSlide"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" class="btnNextSlide"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

// Slide san pham con cua slide san pham duoc quan tam nhieu
$('.showSlideSubProduct').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  autoplay: true,
  autoplaySpeed: 4000,
});

//Slide project
$('#showSlideProjectPopular').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows:false,
  autoplay: true,
  autoplaySpeed: 4000,
});

//slide logo
$('#showSlideLogo').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: '<button type="button" class="btnPrevSlide"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" class="btnNextSlide"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});	

//Map
// Map
var map;
function initMap(){
	var valLat = $("#map").data("lat");
	var ValLng = $("#map").data("lng");

	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: valLat, lng: ValLng},
    zoom: 16,
    styles: [
		  {
		    "featureType": "poi.business",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#5b7234"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#c7e5f9"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#71b5ff"
		      }
		    ]
		  }
		]
  	});

	var image = 'asset/image/gmap_marker.png';
	var beachMarker = new google.maps.Marker({
		position: {lat: valLat, lng: ValLng},
		map: map,
		icon: image
	});
}

//An hien form lien lac
$('#btnCloseContact').click(function(){
	$('.wrapMapAndContact').removeClass('displayContact');
	$('.wrapMapAndContact').addClass('displayMap');
});

$('#btnOpenContact').click(function(){
	$('.wrapMapAndContact').removeClass('displayMap');
	$('.wrapMapAndContact').addClass('displayContact');
});