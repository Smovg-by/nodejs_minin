const os = require('os')

// console.log('Operation system: ', os.platform());

// console.log('CPU architechture: ', os.arch());

// console.log('all CPUs info: ', os.cpus());

console.log('free memory: ', os.freemem()); // свободная оперативная память

console.log('total memory: ', os.totalmem()); // всего оперативная память

console.log('home directory: ', os.homedir()); // домашняя директория

console.log('how log system is working: ', os.uptime()); // сколько времени включена система