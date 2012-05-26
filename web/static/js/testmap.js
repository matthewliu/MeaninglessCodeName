var meaninglesscodename = meaninglesscodename || {};
meaninglesscodename.testmap = meaninglesscodename.testmap || {};

function initialize() {

    var myLatlng = new google.maps.LatLng(37.7750,-122.4183);
    var myOptions = {
    zoom: 8,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
    }

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    for (var i = 0; i < locations_list.length; i++) {

        latitude = locations_list[i].fields.latitude/10000;
        longitude = locations_list[i].fields.longitude/10000;
        entity_node = locations_list[i].fields.entitynode;
        time_instance = locations_list[i].fields.time_instance;
        
        var location = new google.maps.LatLng(latitude, longitude);

        var marker = createMarker(map, location);
        var marker_description = createMarkerDescription(entity_node, time_instance);
        attachDescriptionToMarker(map, marker, marker_description);        
    } 
}

function createMarker(map, location){
    var created_marker = new google.maps.Marker({
        position: location,
        map: map
    });
    
    return created_marker;
}

function createMarkerDescription(entity_node, time_instance){
    var created_marker_description = new google.maps.InfoWindow({
        content: entity_node + " " + time_instance,
        size: new google.maps.Size(50,50)
    });
    
    return created_marker_description;
}

function attachDescriptionToMarker(map, marker, marker_description){
    google.maps.event.addListener(marker, 'click', function(){
        marker_description.open(map, marker); 
    });
}

google.maps.event.addDomListener(window, 'load', initialize);