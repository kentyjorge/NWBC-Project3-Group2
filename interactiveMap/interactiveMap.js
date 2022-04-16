let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
  });
  
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }).addTo(myMap);

// Will be used to build heatmap layer once data is pulled in with FLask App
// d3.json(file).then(function(data) {

//     console.log(data);
  
//     var heatArray = [];
  
//     for (var i = 0; i < data.length; i++) {
//       var location = data[i].location;