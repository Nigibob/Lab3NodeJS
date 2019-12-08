import { Metric, MetricsHandler } from '../src/metrics'

const met = [
  new Metric('1234', 12),
  new Metric('5678', 10),
  new Metric('1337', 8)
]

const db = new MetricsHandler('./db')

db.save('0', met, (err: Error | null) => {
  if (err) throw err
  console.log('Data populated')
})
