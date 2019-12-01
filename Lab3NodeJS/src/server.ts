var bodyparser = require('body-parser');
var express = require('express');
import MetricsHandler = require('metrics');
var app = express();

app.set('port', 1111)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

MetricsHandler = new MetricsHandler('./db/metrics')

app.post('/metrics/:id', (req, res) => {
  dbMet.save(req.params.id, req.body, (err) => {
    if (err) throw err
    res.status(200).send()
  })
})

app.get('/', (req, res) => {res.send('Hello')})

app.get('/metrics/:id', (req, res) => {


})
app.listen(
  app.get('port'),
  () => console.log(`server listening on ${app.get('port')}`)
)
