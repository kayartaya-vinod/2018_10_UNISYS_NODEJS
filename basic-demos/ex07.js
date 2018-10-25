const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'print-table.js');

fs.readFile(filename, 'utf-8', function (err, data) { 
    if(err) throw err;

    console.log(data);
});

console.log('End of ex07.js execution.');
console.log('--------------------------------');