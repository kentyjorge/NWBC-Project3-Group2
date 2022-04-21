// Code to plot the monthly attendance of a selected national historic site

// Create the drop down of the national historic site names
// Initialize the list variable to store the site names for the drop down
parks = []
// Loop through the data set to pull out the national historic site names and push them to the list
for (let i = 0; i < data.length; i++) {
    parks.push(data[i]['Park'])
};
// Append the values of the list in the drop down
let dropDown = d3.select('#selDataset');
parks.forEach(park => {
    dropDown.append('option').text(park).property('value', park);
});

// Initialize the plot when the screen opens on the first national historic site
// Assign the values to the variables for the first data record
for (let i = 0; i < 1; i++) {
    let parkName = data[0]['Park'];
    let jan = data[0]['Jan'];
    let feb = data[0]['Feb'];
    let mar = data[0]['Mar'];
    let apr = data[0]['Apr'];
    let may = data[0]['May'];
    let jun = data[0]['Jun'];
    let jul = data[0]['Jul'];
    let aug = data[0]['Aug'];
    let sep = data[0]['Sep'];
    let oct = data[0]['Oct'];
    let nov = data[0]['Nov'];
    let dec = data[0]['Dec'];

    // Define the X and Y data sets
    let xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let yData = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

    // Define the trace
    let trace1 = {
        x: xData,
        y: yData,
    };

    // Define the plot data
    let plotData = [trace1];

    // Define the layout
    let layout = {
        title: `Attendance in 2021 by Month for ${parkName}.`
    };

    // Initiate the plot
    Plotly.newPlot("plot", plotData, layout);
};

// When an option in the drop down is changed, call a function to refresh the plot
function optionChanged(selection) {
    parkAttendance(selection);
};

// Function to refresh the plot with a selected national historic sites
function parkAttendance(park) {
    // Iterate through all the national historic sites
    for (let i = 0; i < data.length; i++) {
        // If the iterated site matches the historic site selected, store those values for the park name and monthly attendance data
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

            // Set the X and Y data for the plot
            let xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let yData = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

            // Set the trace variable
            let trace1 = {
                x: xData,
                y: yData,
            };

            // Set the plot data
            let plotData = [trace1];

            // Set the layout
            let layout = {
                title: `Attendance in 2021 by Month for ${parkName}.`
            };

            // Refresh the plot with the newly selected data.
            Plotly.newPlot("plot", plotData, layout);
        }
    }

}