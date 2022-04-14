
parks = []
for (let i = 1; i < data.length; i++) {
    parks.push(data[i]['Park'])
};

let dropDown = d3.select('#selDataset');
parks.forEach(park => {
    dropDown.append('option').text(park).property('value', park);
});
    
function optionChanged(selection) {
    parkAttendance(selection);
};

function parkAttendance(park) {
    for (let i = 1; i < data.length; i++) {
        if (data[i]['Park'] == park) {
            let parkName = data[i]['Park'];
            let jan = data[i]['Jan'];
            let feb = data[i]['Feb'];
            let mar = data[i]['Mar'];
            let apr = data[i]['Apr'];
            let may = data[i]['May'];
            let jun = data[i]['Jun'];
            let jul = data[i]['Jul'];
            let aug = data[i]['Aug'];
            let sep = data[i]['Sep'];
            let oct = data[i]['Oct'];
            let nov = data[i]['Nov'];
            let dec = data[i]['Dec'];


            let xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let yData = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

            let trace1 = {
                x: xData,
                y: yData,
            };

            let plotData = [trace1];

            let layout = {
                title: `Attendance in 2021 by Month for ${parkName}.`
            };

            Plotly.newPlot("plot", plotData, layout);
        }
    }





}