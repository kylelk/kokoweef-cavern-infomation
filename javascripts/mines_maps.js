function initialize() {
  var kokoweef_cavern = new google.maps.LatLng(35.420347, -115.493836);
  var mapOptions = {
    zoom: 11,
    center: kokoweef_cavern,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }

  var map = new google.maps.Map(document.getElementById('nearby_mines_map'), mapOptions);
  var kmzLayer = new google.maps.KmlLayer('http://kylelk.github.io/kokoweef-cavern-infomation/mines.kmz');
  kmzLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
