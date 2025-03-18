const xlsx = require('xlsx');
const fs = require('fs');

// Sample JSON data
const jsonData = [
    { Name: "Alice", Age: 25, City: "New York" },
    { Name: "Bob", Age: 30, City: "Los Angeles" },
    { Name: "Charlie", Age: 28, City: "Chicago" }
];

// Convert JSON to a worksheet
const worksheet = xlsx.utils.json_to_sheet(jsonData);

// Create a new workbook and append the worksheet
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Save the workbook to a file
const filePath = "output.xlsx";
xlsx.writeFile(workbook, filePath);

console.log(`Excel file created: ${filePath}`);
