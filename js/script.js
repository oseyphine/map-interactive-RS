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
        {lat: -20.904788036065646, lng: 55.498504064567086, img: greenIcon, popup: 'Salut'},
        {lat: - 20.889987, lng: 55.500152, img: greenIcon, popup: 'Meuh!'},
        {lat: -20.873431, lng: 55.452629, img: greenIcon, popup: 'Salut'},
        {lat: -20.948746, lng: 55.281660, img: greenIcon, popup: 'Coucou'},
        {lat: -20.895015, lng:  55.497857, img: greenIcon, popup: 'Salut'},
        {lat: -21.326289, lng: 55.608400, img: greenIcon,popup: 'Meuh!'},
        {lat: -20.913092, lng: 55.620134, img: orangeIcon, popup: 'Salut'},
        {lat: -20.908671, lng: 55.605084, img: orangeIcon, popup: 'Salut'},
        {lat: -21.346450, lng: 55.492311, img: orangeIcon, popup: 'Salut'},
        {lat: -20.890523, lng: 55.443799, img: orangeIcon, popup: 'Coucou'},
        {lat: -21.020964, lng: 55.264664, img: orangeIcon, popup: 'Salut'},
        {lat: -21.342968, lng: 55.494574, img: orangeIcon, popup: 'Salut'},
        {lat: -20.888212, lng: 55.469084, img: redIcon, popup: 'Salut'},
        {lat: -21.026939, lng: 55.268634, img: redIcon, popup: 'Salut'},
        {lat: -20.888738, lng: 55.501599, img: redIcon, popup: 'Coucou'},
        {lat: -20.931442, lng: 55.298157, img: redIcon, popup: 'Salut'},
        {lat: -20.907459, lng: 55.503217, img: redIcon, popup: 'Meuh!'},
        {lat: -20.926038, lng: 55.454804, img: redIcon, popup: 'Salut'},
        // La suite des données sont aléatoire, ils ne correspondent pas à Sodiac
        {lat: -20.91909, lng: 55.48593, img: redIcon, popup: 'Coucou'},
        {lat: -20.88838, lng: 55.4707, img: redIcon, popup: 'Salut'},
        {lat: -20.89248, lng: 55.49424, img: redIcon, popup: 'Salut'},
        {lat: -20.89277, lng: 55.50117, img: greenIcon, popup: 'Meuh!'},
        {lat: -20.91576, lng: 55.50533, img: greenIcon, popup: 'Salut'},
        {lat: -20.91068, lng: 55.48316, img: greenIcon, popup: 'Coucou'},
        {lat: -20.89058, lng: 55.44923, img: greenIcon, popup: 'Meuh!'},
        {lat: -20.89488, lng: 55.46516, img: greenIcon, popup: 'Salut'},
        {lat: -20.88779, lng: 55.4642, img: greenIcon, popup: 'Meuh!'},
        
      ]


// console.log(markerTab[0].lat);
for(let i=0; i<markerTab.length; i++){
    // console.log(markerTab[i].img);
    markerTab[i] = L.marker([markerTab[i].lat, markerTab[i].lng], {icon: markerTab[i].img}).bindPopup(markerTab[i].popup).addTo(map);
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