const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)

  if (!ext) {
    filePath += '.html'
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-type': 'text-html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-type': 'text-html'
      })
      res.end(content)
    }
  })
})

// запускаем прослушивание сервера на порт 3000
// после запуска файла, можно открыть в браузере порт 3000 и просмотреть а нетворке preview
server.listen(3000, () => {
  console.log('Server has been started...')
})
