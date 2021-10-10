const fs = require('fs'); // fs - filesystem
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Directory created')
// });

// const filePath = path.join(__dirname, 'test', 'text.txt');
//
// fs.writeFile(filePath, 'Hello NODE JS again', (err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log('File was created')
// });

// const filePath = path.join(__dirname, 'test', 'text.txt');
//
// fs.appendFile(filePath, '\n Hello NODE JS again and again', (err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log('File was updated')
// });

const filePath = path.join(__dirname, 'test', 'text.txt');

fs.readFile(filePath, 'utf-8',(err, content) => {
  if (err) {
    throw err
  }
  console.log('Content', content)
});
