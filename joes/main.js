function creatingDrivingDirectionsMap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {
            enebleHighAccuracy: true,
            maximumAge: 1000,
            timeout:500
        });
}else{
    document.getElementById("map").innerHTML = "No  support for geolocation"
  }
};

function onSuccess(position){
    showMap(
        position.coords.latitude,
        position.coords.longitude
    );
}

function onError(){
    let mapDiv = document.getElementById("map");
    switch(error.code){
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML = "Usser denied geolocation"
            break;
        case error.POSITION_UNAVAILABLE:
          mapDiv.innerHTML = "Usser denied geolocation"
        break;
        case error.TIMEOUT:
                mapDiv.innerHTML = "Usser denied geolocation"
              break;
              case error.UKNOWN_ERROR:
                    mapDiv.innerHTML = "Usser denied geolocation"
                  break;
    }
};

function showMap(lat, long){
    let directionsService = new google.maps.DirectionsService();
    let directionRenderer = new google.maps.DirectinsRenderer();

    let routes = {
       origin:new google.maps.LatLng(lat, long),
       destination: "Toi market",
       travelMode: google.maps.DirectionsTravelMode.DRIVING
    }

    let mapOption = {
        zoom: 10,
        center: new google.maps.LatLng(50.8504500, 4.3487800),
        mapTypeId: google.maps.mapTypeId.ROADMAP
    }

   let map = new google.maps.Map(document.getElementById("map"), mapOption);
   directionRenderer.setMap(map);
   directionsService.routes(routes, function(results, status){
       if(status===google.maps.DirectionsStatus.OK){
           directionRenderer.setDirections(results);
       }
   })
}