const path = require('path'); // встроенный модуль node js, он доступен всегда

console.log("Filename: ", path.basename(__filename));

console.log("Directory name: ", path.dirname(__filename));

console.log("File Extension", path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'));