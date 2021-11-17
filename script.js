//Map initialization
var map = L.map('map').setView([35.6892, 51.3890], 12);

//osm layer
var osm = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);

//GeoJSON
var pointsData = L.geoJSON(pointsJson, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            '<b>بروزرسانی: </b>' + feature.properties.date + '<br>' +
            '<b>ودیعه: </b>' + feature.properties.yearly + '<br>' +
            '<b>اجاره: </b>' + feature.properties.monthly)
    }
}).addTo(map)



//Events
map.on('click', function (e) {
    console.log(e)
})