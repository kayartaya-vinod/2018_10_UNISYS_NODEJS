const executeAfterDelay = require('./my-utils').executeAfterDelay;


console.log('start of ex05 script!');

// non-blocking (asynchronous) code; passes the control to C++ addons, 
// which then calls the anonymous function after the delay, but gives 
// control back to the script ex05 instantiniously
setTimeout(function(){
    console.log('executing the anonymous function from setTimeout...');
}, 0);

// blocking code; blocks the execution of the ex05 script until it is over
executeAfterDelay(function(){
    console.log('executing the anonymous function from executeAfterDelay...');
}, 5000);

console.log('end of ex05 script.')
