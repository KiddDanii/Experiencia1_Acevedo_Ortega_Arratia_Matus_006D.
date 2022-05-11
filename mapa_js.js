function iniciarMap(){
    var coord = {lat:-33.4275792 ,lng: -70.6248978};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}