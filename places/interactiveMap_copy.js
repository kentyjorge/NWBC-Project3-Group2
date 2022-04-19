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
    park['url'] = parks[i]['url']
    park['state'] = parks[i]['state']
    park['type'] = parks[i]['park_type']
    park['image'] = parks[i]['image']
    parkCoords.push(park)
  }
};

console.log(parkCoords)

for (var i =0; i < parkCoords.length; i++) {
  var site = parkCoords[i];
  L.marker(site.coords)
    .bindPopup(`
      <h1 class="text-center">${site.name}</h1> <hr>
        <p class="text-center"><a href="${site.url}">Website</a>
        <p class="text-center">States: ${site.state}</p>
        <p class="text-center">Park Type: ${site.type}</p>
        <p class="text-center"><img src="${site.image}" alt="Visit to See it!" width="200" height="150">
    `)
    .addTo(myMap);
}

//markerHTML = "<h1 class="text-center">Park Name</h1>" + "<hr>" + 
//                "<div class="container">" + 
//                  "<div class="row">" +
//                      "<div class="col-sm-6">" +
//                          "<p>Some Park Info</p>" +
//                          "<p>More Park Info</p>" +
//                          "<p>More Park Info</p>" +
//                      "</div>" +
//                      "<div class="col-sm-6">" + 
//                          "<a href="Park IMG Link"></a>" +
//                      "</div>" +
//                  "</div>" +
//              "</div>"

// Overlays that can be toggled on or off
//var overlayMaps = {
 // Cities: cityLayer
//};

