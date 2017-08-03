// Markers personalisées

let greenIcon = L.icon({
    iconUrl: 'images/leaf-green.png',
    // shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let orangeIcon = L.icon({
    iconUrl: 'images/leaf-orange.png',
    // shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let redIcon = L.icon({
    iconUrl: 'images/marker-icons.png',
    // shadowUrl: 'img/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// FIN de markers personnalisés

let dataTab = [
    {type: 'habitat', lat: -20.904788036065646, lng: 55.498504064567086, img: greenIcon, popup : '<img src="images/sodiac.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'habitat', lat: - 20.889987, lng: 55.500152, img: greenIcon, popup : '<img src="images/sodiac1.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'habitat', lat: -20.873431, lng: 55.452629, img: greenIcon, popup : '<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>'},
    {type: 'habitat', lat: -20.948746, lng: 55.281660, img: greenIcon, popup : '<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'habitat', lat: -20.895015, lng:  55.497857, img: greenIcon, popup : '<img src="images/sodiac4.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'habitat', lat: -21.326289, lng: 55.608400, img: greenIcon, popup : '<img src="images/sodiac5.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'immobilierE', lat: -20.913092, lng: 55.620134, img: orangeIcon, popup : '<img src="images/sodiac6.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta. <button>Apercu</button>'},
    {type: 'immobilierE', lat: -20.908671, lng: 55.605084, img: orangeIcon, popup : '<img src="images/sodiac7.jpg" alt=""/></br>Ensembe de bureaux et de commerces dans deux batiments sur une superficie totale de 9 380m2, avec 360 places de parking.<button>Apercu</button>'},
    {type: 'immobilierE', lat: -21.346450, lng: 55.492311, img: orangeIcon, popup : '<img src="images/sodiac8.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'immobilierE', lat: -20.890523, lng: 55.443799, img: orangeIcon, popup :'<img src="images/sodiac6.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta. <button>Apercu</button>'},
    {type: 'immobilierE', lat: -21.020964, lng: 55.264664, img: orangeIcon, popup : '<img src="images/sodiac4.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'immobilierE', lat: -21.342968, lng: 55.494574, img: orangeIcon, popup : '<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>'},
    {type: 'amenagement', lat: -20.888212, lng: 55.469084, img: redIcon, popup :'<img src="images/sodiac7.jpg" alt=""/><br><h5>Cour Kerveguen :</h5></br>Ensembe de bureaux et de commerces dans deux batiments sur une superficie totale de 9 380m2, avec 360 places de parking.<button>Apercu</button>'},
    {type: 'amenagement', lat: -21.026939, lng: 55.268634, img: redIcon, popup :'<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'amenagement', lat: -20.888738, lng: 55.501599, img: redIcon, popup : '<img src="images/sodiac.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'amenagement', lat: -20.931442, lng: 55.298157, img: redIcon, popup: '<img src="images/sodiac8.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {type: 'amenagement', lat: -20.907459, lng: 55.503217, img: redIcon, popup:'<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>'},
    {type: 'amenagement', lat: -20.926038, lng: 55.454804, img: redIcon, popup : '<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    // La suite des données sont aléatoire, ils ne correspondent pas à Sodiac
    {type: 'amenagement', lat: -20.91909, lng: 55.48593, img: redIcon, popup: 'Coucou'},
    {type: 'amenagement', lat: -20.88838, lng: 55.4707, img: redIcon, popup: 'Salut'},
    {type: 'amenagement', lat: -20.89248, lng: 55.49424, img: redIcon, popup: 'Salut'},
    {type: 'habitat', lat: -20.89277, lng: 55.50117, img: greenIcon, popup: 'Meuh!'},
    {type: 'habitat', lat: -20.91576, lng: 55.50533, img: greenIcon, popup: 'Salut'},
    {type: 'habitat', lat: -20.91068, lng: 55.48316, img: greenIcon, popup: 'Coucou'},
    {type: 'habitat', lat: -20.89058, lng: 55.44923, img: greenIcon, popup: 'Meuh!'},
    {type: 'habitat', lat: -20.89488, lng: 55.46516, img: greenIcon, popup: 'Salut'},
    {type: 'habitat', lat: -20.88779, lng: 55.4642, img: greenIcon, popup: 'Meuh!'},
];

    // let iconImmobilierE = 'img/leaf-green.png';
    // let iconHabitat = 'img/leaf-orange.png';
    // let iconAmenagement = 'img/marker-icons.png';
    // let iconIngenierie = 'img/leaf-green.png';

// *** Configuration générale de la MAP : délimitatée à La Réunion

// L'étendue de la map
let sudOuest = L.latLng(-22.2484,57.1619);
let nordEst = L.latLng(-20.2751,54.1681);
let bounds = L.latLngBounds(sudOuest, nordEst);

// Les caractéristiques initiales de la map
let map = new L.Map('map',
{
    center: [-21.1011, 55.532],
    maxBounds: bounds,
    minZoom: 9,
    maxZoom: 16,
    zoom: 9
});

//L'affichage de la map : source bibliothèque
L.tileLayer('https://api.tiles.mapbox.com/v2/dakno.map-xxbpkb1z/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// *** FIN de configuration générale de la MAP

$(document).ready(function(){

    //Activation de la map au clique
    map.scrollWheelZoom.disable();
    map.on('click', function() {
        if (map.scrollWheelZoom.enabled()) {
            map.scrollWheelZoom.disable();
        }
        else {
            map.scrollWheelZoom.enable();
        }
    });
    //FIN de l'activation de la map au clique

    let Categorie = {
        immobilierE : L.layerGroup().addTo(map),
        habitat : L.layerGroup().addTo(map),
        amenagement : L.layerGroup().addTo(map),
        ingenierie : L.layerGroup().addTo(map),
    }

    // let iconSpecial = {
    //     immobilierE : iconImmobilierE,
    //     habitat : iconHabitat,
    //     amenagement : iconAmenagement,
    //     ingenierie : iconIngenierie,
    // };

    // let icon = {
    //     iconUrl: iconSpecial[type],
    //     iconSize: [38, 95],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],

    // };


    for(i=0; i < dataTab.length; i++){
        let latitude = dataTab[i].lat;
        let longitute = dataTab[i].lng;
        let type = dataTab[i].type;
        let popup = dataTab[i].popup;

        let markers = L.marker([latitude,longitute],{icon: dataTab[i].img}).bindPopup(popup);
        Categorie[type].addLayer(markers)

        // if(Categorie[type]){

        // }

        $('.categorie_Checkbox').on('click',function(){
            let id = $(this).attr('id');

            if($(this).is(':checked')){
                Categorie[id].addTo(map);
            }else{  
                map.removeLayer(Categorie[id]);
            }
        });        
    }
});

// REGROUPER LES MARKERS
// let markers = L.markerClusterGroup();
// markers.addLayer(L.marker(getRandomLatLng(map)));
// map.addLayer(markers);

// var marker = L.marker([-20.877, 55.452]).addTo(map);
// var marker = L.marker([-20.887, 55.442]).addTo(map);
// var marker = L.marker([-20.897, 55.492]).addTo(map);
// var marker = L.marker([-20.897, 55.542]).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();