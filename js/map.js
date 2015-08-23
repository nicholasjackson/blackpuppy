function initMap() {
  console.log('callback');

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: 51.6095, lng: -0.8657701}
  });

  var ctaLayer = new google.maps.KmlLayer({
    url: '/kml/blackpupp100.kml',
    map: map
  });
}
