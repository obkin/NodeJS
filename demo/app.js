fs = require('fs');

const data = fs.readFileSync('./data.txt');
console.log(data.toString());

