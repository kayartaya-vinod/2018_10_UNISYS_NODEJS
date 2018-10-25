const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'print-table.js');

// any error that readFileSync encounters, will be re-thrown here
const content = fs.readFileSync(filename, 'utf-8');

console.log(content);

console.log('--------------------------------');
console.log('End of ex06.js execution.');