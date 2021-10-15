const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-type': 'text/html' // хром парсит html
        // 'Content-type': 'text/plain' // хром парсит обычный текст
      })
      res.end(data) // здесь то, чем завершится ответ от сервера
    })
  } else if (req.url === '/contact') {
    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-type': 'text/html' // хром парсит html
        // 'Content-type': 'text/plain' // хром парсит обычный текст
      })
      res.end(data) // здесь то, чем завершится ответ от сервера
    })
  }
})

// запускаем прослушивание сервера на порт 3000
// после запуска файла, можно открыть в браузере порт 3000 и просмотреть а нетворке preview
server.listen(3000, () => {
  console.log('Server has been started...')
})
