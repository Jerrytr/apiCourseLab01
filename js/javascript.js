function myMap() {
    let mapProp= {
        center: new google.maps.LatLng(37.237162, -115.4840),
        zoom: 11,
    };
    let map = new google.maps.Map(document.getElementById('googleMap'),
    mapProp);
    let geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    let address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status == 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert('There was an error: ' + status);
        }
    });
}
