const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  // зададим дефолтный content type
  let contentType = "text.html"
  // переключаем тип content type В зависимости от переменной
    // и прокинем переменную contentType ниже в
  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break
    case ".js":
      contentType = "text/javascript"
      break
    default:
      contentType = 'text/html'
  }

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
        // передаем сюда переменную, тобы в хедер передавался нужный MIME content type
        'Content-type': contentType
      })
      res.end(content)
    }
  })
})

// прочитаем порт, если нет задаем по умолчанию 3000
const PORT = process.env.PORT || 3000

// запускаем прослушивание сервера на порт 3000
// после запуска файла, можно открыть в браузере порт 3000 и просмотреть а нетворке preview
server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})
