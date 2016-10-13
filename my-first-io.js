var fs = require('fs');
var filePath = process.argv[2];

var file = fs.readFileSync(filePath);

var fileLength = file.toString().split('\n').length - 1;

console.log(fileLength);
