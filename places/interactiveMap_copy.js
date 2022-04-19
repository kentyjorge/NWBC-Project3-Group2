let myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

console.log(parks)

parkCoords = []
for (let i = 0; i < parks.length; i++) {
  if (parks[i]['coord'] != "") {
    let park = {};
    park['name'] = parks[i]['park']
    park['coords'] = [parks[i]['latitude'], parks[i]['longitude']]
    parkCoords.push(park)
  }
};

console.log(parkCoords)

for (var i =0; i < parkCoords.length; i++) {
  var site = parkCoords[i];
  L.marker(site.coords)
    .bindPopup(`<h1>${site.name}</h1>`)
    .addTo(myMap);
}



// Overlays that can be toggled on or off
//var overlayMaps = {
 // Cities: cityLayer
//};

