// import the data from data.js
const tableData = data;  // Declare var
// Reference the HTML table using d3
var tbody = d3.select("tbody");  // Declare var

// create table, first, clear out any existing data
function buildTable(data) {
    tbody.html("");
}

// Create forEach function to loop through array and add rows of data to table
    data.forEach((dataRow) => {
        let row = tbody.append("tr"); // use let as var only exists inside function, tr = table row
// Loop through each field in dataRow arg - fields become table data and wrapped in td tags when appended to HTML table
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );    
}); // Loop thru each obj in array, append row to HTML table, Add value from obj into cell