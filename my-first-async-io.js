var fs = require('fs');
var filePath = process.argv[2];
var fileLines = 0;

function getFileInfo() {
  fs.readFile(filePath, function doneRead(error, fileContent) {
  fileLines = fileContent.toString().split('\n').length - 1;
  console.log(fileLines);
  });
}

getFileInfo();
