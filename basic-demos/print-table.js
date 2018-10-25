// module: basic-demos/print-table

console.log('print-table module is being interpreted...');

function printTable(num) {
    console.log(`Multilplication table for ${num}: `)
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}

// by default module.exports is an empty object
// and we can re-assign the same with any value of our choice.
// In this example, we are assigning a function
module.exports = printTable;

// When this module is imported into another module, what we 
// actually import is the function exported from here