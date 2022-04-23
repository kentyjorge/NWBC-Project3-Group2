let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

console.log(parks)

parkCoords = {}
for (let i = 0; i < parks.length; i++) {
  if (parks[i]['coord'] != "") {
    let park = {};
    parkCoords[parks[i]['park_code']] = [parks[i]['latitude'], parks[i]['longitude']]
  }
};

parkVisitors = []
for (let i = 0; i < data.length; i++) {
  let visitors = {}
  let totalVisitors = (
              data[i]["Jan"] + data[i]["Feb"] +
              data[i]["Mar"] + data[i]["Apr"] +
              data[i]["May"] + data[i]["Jun"] +
              data[i]["Jul"] + data[i]["Aug"] +
              data[i]["Sep"] + data[i]["Oct"] +
              data[i]["Nov"] + data[i]["Dec"]      
            );
  visitors['park_code'] = data[i]['Unit Code'].toLowerCase()
  visitors['totalVisitors'] = totalVisitors
  parkVisitors.push(visitors)
}

console.log(parkCoords)

// Gets total park visitorship for heatmap, will be added to arrays of lat/lng coordinates
heatArray = []

let maxIntensity = 0
for (let elt of parkVisitors) {
  if (elt['totalVisitors'] > maxIntensity) {
    maxIntensity = elt['totalVisitors']
  }
}

for (let elt of parkVisitors) {
  if (parkCoords[elt['park_code']]) {
    heatPoint = [parkCoords[elt['park_code']][0],
                 parkCoords[elt['park_code']][1],
                 elt['totalVisitors']
    ];
    heatArray.push(heatPoint)
  }
};

console.log(heatArray)
  
let heat = new L.heatLayer(heatArray, {
    radius: 25,
    blur: 20,
    max: maxIntensity,
    maxZoom: 4,
    gradient: {0.05: 'blue', 0.4: 'lime', .8: 'red'}
  }).addTo(myMap);
  
