// by default module.exports is an object

// by adding new attribute (properties) to the same,
// we will be able to export multiple members grouped as
// one object
module.exports.factorial = factorial = function (num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

module.exports['fibonacci'] = function (limit) {
    let fibo = [];
    let a = -1, b = 1, c;

    for (let i = 0; i < limit; i++) {
        c = a + b;
        a = b;
        b = c;
        fibo.push(c);
    }
    return fibo;
}

function sleep(duration) {
    const startTime = Date.now();
    while ((Date.now() - startTime) <= duration);
}

module.exports.executeAfterDelay = function (someFunction, duration = 1000) {
    if (!someFunction || typeof (someFunction) != 'function') {
        throw 'first argument must be a function, got ' + typeof(someFunction);
    }

    if(!duration || typeof duration != 'number' || duration<=0) {
        throw 'second argument must be a number greater than 0';
    }
    
    sleep(duration); // blocks the execution for the specified duation
    someFunction(); // executes only after the delay mentioned
}