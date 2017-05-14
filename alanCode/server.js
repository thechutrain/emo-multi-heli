var express = require('express')
var app = express()
var path = require('path')

app.use('/assets', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(4001, function () {
  console.log('Example app listening on port 4001!')
})