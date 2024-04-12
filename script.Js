let map;

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // 
        zoom: 13
    });
    addParkingMarkers();
}

function addParkingMarkers() {
    
    const parkingLocations = [
        { lat: 12.972442, lng: 77.580643, title: 'Parking Lot A' },
        { lat: 23.66495, lng: 86.14492, title: 'Parking Lot B' },
        
    ];

    parkingLocations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
        marker.addListener('click', () => {
            alert(`You clicked on ${location.title}`);
        });
    });
}
