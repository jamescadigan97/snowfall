// from data.js
d3.csv("full_szn.csv", function(data){
    console.log(data)

    var form = d3.select("form")
    var button = d3.select("button")
    
    intialize_data = data

//Set event
    button.on("click", filter_data);
    form.on("submit", filter_data);

//Define function 
    function filter_data(){
    
    data = intialize_data


    //Prevent refreshing
    d3.event.preventDefault();


// Filter by  Date    
    //Select first the value from the first input box
    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value")

    //Filter by Date if there is a value
    if (inputValue.length > 0){
        snow_filtered = intialize_data.filter(data => data.date === inputValue);
    }
    //Define unfo_unfiltered even if there is no date
    else {
        snow_filtered = intialize_data.filter(data => data);
    }

//Filter by Resort
    //Select the value from the second input box
    var inputElement2 = d3.select("#resort")
    var inputValue2 = inputElement2.property("value")

    //Filter by State if there is a value
    if (inputValue2.length > 0){
        snow_filtered = snow_filtered.filter(data => data.resort_name === inputValue2)
    }

//Filter by Region
    //Select first the value from the third input box
    var inputElement3 = d3.select("#region")
    var inputValue3 = inputElement3.property("value")

    //Filter by City if there is a value
    if (inputValue3.length > 0){
        snow_filtered = snow_filtered.filter(data=> data.region === inputValue3);
    }

//Filter by Country
    //Select the value from the fourth input box
    var inputElement4 = d3.select("#country")
    var inputValue4 = inputElement4.property("value")

    //Filter by Country if there is a value
    if (inputValue4.length > 0 ){
        snow_filtered = snow_filtered.filter(data => data.country === inputValue4)
        console.log("Country")
        console.log(snow_filtered)
    }

//Filter by Pass
    //Select the value from the fifth input box  
    var inputElement5 = d3.select("#pass")
    var inputValue5 = inputElement5.property("value")

    //Filter by Pass if there is a value
    if (inputValue5.length > 0 ){
        snow_filtered = snow_filtered.filter(data => data.pass === inputValue5)
    }

    // var parseTime = d3.timeParse("%Y-%m-%d");

    snow_filtered.forEach(function(data) {
        // data.date = parseTime(data.date)
        data.snowfall = +data.snowfall;
        // data.middle_depth = +data.middle_depth;
        // data.upper_depth = +data.upper_depth;
        // data.lower_depth = +data.lower_depth;
      });

    //Clear previous array
    d3.select("tbody").html("")

    // snow_sorted.forEach((data) => {
    snow_filtered.forEach((data) => {

        //Select location for object 
        var row = d3.select("tbody").append("tr")

        //Get the entries of the array
        Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td")

        //Add text to HTML elements
        cell.text(value)
        });
    });
    //Ending for Read function
    }
//Ending for Read function
});