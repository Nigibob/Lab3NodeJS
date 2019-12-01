import LevelDB = require('./leveldb')
import WriteStream from 'level-ws'

export class MetricsHandler {
  private db: any

  constructor(dbPath: string) {
    this.db = LevelDB.open(dbPath)
  }
}

export class MetricsHandler {
    public save(key: number, metrics: Metric[], callback: (error: Error | null) => void) {
      const stream = WriteStream(this.db)
      stream.on('error', callback)
      stream.on('close', callback)
      metrics.forEach((m: Metric) => {
        stream.write({ key: `metric:${key}${m.timestamp}`, value: m.value })
      })
      stream.end()
    }
}
