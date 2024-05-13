const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Welcome, and hello')
    res.end()
})

server.listen(5000)