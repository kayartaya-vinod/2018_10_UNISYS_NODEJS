const os = require('os'); // notice: there is no './' for 'os'

const cpus = os.cpus();

console.log('You have', cpus.length, 'cpus.');

console.log(cpus[0]);

console.log(os.uptime())

console.log(os.arch());
