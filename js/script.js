var map = L.map('map').setView([-20.877, 55.432], 11);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {minZoom :10, maxZoom : 14,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let greenIcon = L.icon({
    iconUrl: 'img/leaf-green.png',
    shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let orangeIcon = L.icon({
    iconUrl: 'img/leaf-orange.png',
    shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let redIcon = L.icon({
    iconUrl: 'img/marker-icons.png',
    shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var markerTab = [
        {lat: -20.87269, lng: 55.44889, img: greenIcon},
        {lat: -20.8966, lng: 55.44439, img: greenIcon},
        {lat: -20.93405, lng: 55.47208, img: greenIcon},
        {lat: -20.92877, lng: 55.49424, img: greenIcon},
        {lat: -20.92124, lng: 55.43885, img: greenIcon},
        {lat: -20.89474, lng: 55.46169, img: greenIcon},
        {lat: -20.89065, lng: 55.45505, img: orangeIcon},
        {lat: -20.88872, lng: 55.46566, img: orangeIcon},
        {lat: -20.90129, lng: 55.4084, img: orangeIcon},
        {lat: -20.8915, lng: 55.41759, img: orangeIcon},
        {lat: -20.90784, lng: 55.40092, img: orangeIcon},
        {lat: -20.90589, lng: 55.46793, img: orangeIcon},
        {lat: -20.90432, lng: 55.45546, img: redIcon},
        {lat: -20.92811, lng: 55.42919, img: redIcon},
        {lat: -20.88537, lng: 55.44288, img: redIcon},
        {lat: -20.89033, lng: 55.45281, img: redIcon},
        {lat: -20.92505, lng: 55.45546, img: redIcon},
        {lat: -20.88275, lng: 55.45913, img: redIcon},
        {lat: -20.91909, lng: 55.48593, img: redIcon},
        {lat: -20.88838, lng: 55.4707, img: redIcon},
        {lat: -20.89248, lng: 55.49424, img: redIcon},
        {lat: -20.89277, lng: 55.50117, img: greenIcon},
        {lat: -20.91576, lng: 55.50533, img: greenIcon},
        {lat: -20.91068, lng: 55.48316, img: greenIcon},
        {lat: -20.89058, lng: 55.44923, img: greenIcon},
        {lat: -20.89488, lng: 55.46516, img: greenIcon},
        {lat: -20.88779, lng: 55.4642, img: greenIcon},
        
      ]


// console.log(markerTab[0].lat);
for(let i=0; i<markerTab.length; i++){
    console.log(markerTab[i].img);
    markerTab[i] = L.marker([markerTab[i].lat, markerTab[i].lng], {icon: markerTab[i].img}).addTo(map);
    // L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);

}

// REGROUPER LES MARKERS
// let markers = L.markerClusterGroup();
// markers.addLayer(L.marker(getRandomLatLng(map)));
// map.addLayer(markers);

// var marker = L.marker([-20.877, 55.452]).addTo(map);
// var marker = L.marker([-20.887, 55.442]).addTo(map);
// var marker = L.marker([-20.897, 55.492]).addTo(map);
// var marker = L.marker([-20.897, 55.542]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();