// from data.js
var tableData = data;

/*
Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

Using the UFO dataset provided in the form of an array of JavaScript objects, write 
code that appends a table to your web page and then adds new rows of data for each UFO sighting.

    Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

Use a date form in your HTML document and write JavaScript code that will listen for events and search 
through the date/time column to find rows that match user input.
*/

var tbody = d3.select("tbody");

// select the filter button for future use

var submit = d3.select("#filter-btn");

// create function to display table
function displayTable(info) {
 info.forEach((event) => {
   var tr = tbody.append("tr");
     tr.append("td").text(event.datetime);
     tr.append("td").text(event.city);
     tr.append("td").text(event.state);
     tr.append("td").text(event.country);
     tr.append("td").text(event.shape);
     tr.append("td").text(event.durationMinutes);
     tr.append("td").text(event.comments);
   });
};

// display initial table
displayTable(tableData);

// create function that filters based on the entry and which type
   
function filtering(selection, entry) {

filteredData = tableData.filter(event => event[selection] === entry);

displayTable(filteredData);

};

// On click prevent reloading and remove previous rows.

submit.on("click", function() {
 d3.event.preventDefault();
 tbody.html('');

// Select the input element to get tags

    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select('#city').property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");

    // if input is specific type and variable display for those types

    if (dateInput) {

        filtering('datetime', dateInput);

    } else if (cityInput) {

        filtering('city', cityInput);

    } else if (stateInput) {

        filtering('state', stateInput);

    } else if (countryInput) {

        filtering('country', countryInput);

    } else if (shapeInput) {

        filtering('shape', shapeInput);

    } else {

        alert('You didnt input anything')
    };
});