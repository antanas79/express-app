const express = require('./node_modules/express')
const app = express()
const port = 3008

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

app.post('/fubar.com/person/:input', (req, res) => res.send({"val1" : "1", "val2" : "2"}))

app.post('/fubar.com/facility/:val1', (req, res) => res.send({"val3" : "3", "val4" : "4"}))

app.post('/fubar.com/exposure/:val2', (req, res) => res.send({"val5" : "5"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
