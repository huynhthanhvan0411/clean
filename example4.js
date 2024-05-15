// let data = fetchData();
// let result;

// if (data) {
//   result = processData(data);
// } else {
//   result = 'No data';
// }

// clean code 
let data = fetchData();
let result = data ? processData(data) : "No data";