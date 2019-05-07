// from data.js
var tableData = data;

// Use D3 to select the table body 
tbody = d3.select("tbody")

// Use Object.entries to get key and value arrays inside of the object
// and loop through them to add to the table in html
function displayData(data){ 
    tbody.text("")
    data.forEach(function(ufoSighting){
    new_tr = tbody.append("tr")
    Object.entries(ufoSighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//Select the user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// Filter table with date that the user inputs
function clickSelect(){
    //don't refresh the page!
    d3.event.preventDefault();
    //print inputted value
    console.log(dateInputText.property("value"));
    //create a new table showing only the filtered data
    var new_table = tableData.filter(ufoSighting => ufoSighting.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// Event listener to handle change and click
dateInputText.on("change", clickSelect)
