let matrix = [[1, 2], [3, 4]];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
// clean code 
matrix.forEach((row) => {
  row.forEach((element) => {
    console.log(element);
  });
});