express = require('express')
app = express()

app.set('port', 1337)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

path = require('path')
app.use("/static", express.static('./static/'));
app.get(
  '/',
  (req, res) => res.render('pres.ejs')
)
app.get(
  '/hello',
  (req, res) => res.render('hello.ejs')
)
app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})
app.listen(
  app.get('port'),
  () => console.log(`server listening on ${app.get('port')}`)
)
