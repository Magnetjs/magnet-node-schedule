### Usage
All router api should refer [node-schedule](https://github.com/node-schedule/node-schedule)

Basic
```
import magnet from 'magnet-core'
import Config from 'magnet-config'
import Logger from 'magnet-bunyan'
import Schedule from 'magnet-node-schedule'

let app = await magnet([Config, Logger, Schedule])
```

server/jobs/test.js
```
import _promise from 'bluebird'

export default function ({ nodeSchedule }) {
  nodeSchedule.scheduleJob(
    '*/1 * * * * *',
    async function process () {
      console.log('testing scheduler 2222', await _promise.resolve('hey').timeout(1000))
    }
  )
}
```
