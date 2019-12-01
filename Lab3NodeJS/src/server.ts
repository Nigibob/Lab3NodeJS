/*import body parser*/
app.set('port', 1111)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

const MetricsHandler = new MetricsHandler('./db/metrics')

app.post('/metrics/:id', (req: any, res: any) => {
  dbMet.save(req.params.id, req.body, (err: Error | null) => {
    if (err) throw err
    res.status(200).send()
  })
})

app.get('/metrics/:id', (req: any, res: any) => {


})
app.listen(
  app.get('port'),
  () => console.log(`server listening on ${app.get('port')}`)
)
