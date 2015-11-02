var mapLocation = new google.maps.LatLng(-33.4457796,-70.6422617);  
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 17,
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
                
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var contentString = '<div class="map-info-box">' 
    + '<div class="map-head">' 
    + '<h3>Launch</h3></div>' 
    + '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 604-788-1832<br><span class="map-email"><i class="fa fa-envelope"></i> info@fishtrading.com</span></p>' 
    + '<p><a href="https://www.google.com/maps/place/Lira+196,+Santiago,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4457751,-70.6422617,17z/data=!3m1!4b1!4m2!3m1!1s0x9662c575dc607ae3:0x73314d9179108940" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    
    var image = 'img/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        title: 'HEADQUARTERS', 
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
