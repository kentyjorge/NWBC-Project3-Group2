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


// Gets total park visitorship for heatmap, will be added to arrays of lat/lng coordinates
heatArray = []
for (let j = 0; j < parkCoords.length; j++) {
  for (let i = 0; i < data.length; i++) {
      if (data[i]['Park'].includes(parkCoords[j]['name'])) {
        heatPoint = []
        let totalVisitors = (
          data[i]["Jan"] + data[i]["Feb"] +
          data[i]["Mar"] + data[i]["Apr"] +
          data[i]["May"] + data[i]["Jun"] +
          data[i]["Jul"] + data[i]["Aug"] +
          data[i]["Sep"] + data[i]["Oct"] +
          data[i]["Nov"] + data[i]["Dec"]      
        );
        
        heatPoint.push([parkCoords[j]['coords']])
        heatPoint.push(totalVisitors)
        
        heatArray.push(heatPoint)
    }
  }
}

console.log(heatArray)
//     var heatArray = [];
  
//     for (var i = 0; i < data.length; i++) {
//       var location = data[i].location;
  
//       if (location) {
//         heatArray.push([location.coordinates[1], location.coordinates[0]]);
//       }
//     }
  
//     var heat = L.heatLayer(heatArray, {
//       radius: 20,
//       blur: 35
//     }).addTo(myMap);
  
