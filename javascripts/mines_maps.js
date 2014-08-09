function initialize() {
  var chicago = new google.maps.LatLng(35.420347, -115.493836);
  var mapOptions = {
    zoom: 11,
    center: chicago,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }

  var map = new google.maps.Map(document.getElementById('nearby_mines_map'), mapOptions);

  var ctaLayer = new google.maps.KmlLayer({
    url: 'doc.kml'
  });
  ctaLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
