src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity = "sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin = ""




//Map initialization
var map = L.map('map').setView([35.7, 51.35], 12);

//osm layer
var osm = L.tileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=lzIzrp8GaiFvAmZ3SkkM', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
})
osm.addTo(map);

L.marker([35.75784, 51.54898]).addTo(map)
    .bindPopup('50,000,000<br> 3,000,000')
    .openPopup();