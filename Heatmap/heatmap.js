let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

console.log(data)

// Gets total park visitorship for heatmap, will be added to arrays of lat/lng coordinates
parkVisitorship = []
for (var i = 0; i < data.length; i++) {

    visitorship = {}
    let totalVisitors = (
      data[i]["Jan"] + data[i]["Feb"] +
      data[i]["Mar"] + data[i]["Apr"] +
      data[i]["May"] + data[i]["Jun"] +
      data[i]["Jul"] + data[i]["Aug"] +
      data[i]["Sep"] + data[i]["Oct"] +
      data[i]["Nov"] + data[i]["Dec"]      
    );
    
    visitorship[data[i]["Park"]] = totalVisitors
    parkVisitorship.push(visitorship)
}

console.log(parkVisitorship)
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
  
