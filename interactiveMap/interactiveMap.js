let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }).addTo(myMap);

// Will be used to build heatmap layer once data is pulled in with FLask App
// d3.json(file).then(function(data) {

//     console.log(data);
//     markers = []
//     for (var i = 0; i < data.length; i++) {
//
//         markerHTML = "<h1 class="text-center">Park Name</h1>" + "<hr>" + 
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
//
//         let marker = L.marker([data.lat, data.lng], {
//          some parameters for the marker
//        }).bindPopup(markerHTML)
//        markers.push(marker)
//       }
//
//      