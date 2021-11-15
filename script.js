//Map initialization
var map = L.map('map').setView([35.6892, 51.3890], 12);

//osm layer
var osm = L.tileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=lzIzrp8GaiFvAmZ3SkkM', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
})
osm.addTo(map);

//GeoJSON
var pointsData = L.geoJSON(pointsJson, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            '<b>Date: </b>' + feature.properties.date + '<br>' +
            '<b>Yearly: </b>' + feature.properties.yearly + '<br>' +
            '<b>Monthly: </b>' + feature.properties.monthly)
    }
}).addTo(map)