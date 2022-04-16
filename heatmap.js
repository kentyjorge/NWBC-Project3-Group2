let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Will be used to build heatmap layer once data is pulled in with FLask App
// d3.json(file).then(function(data) {

//     console.log(data);
  
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
  
//   });