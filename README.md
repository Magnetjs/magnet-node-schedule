### Usage
All router api should refer [node-schedule](https://github.com/node-schedule/node-schedule)

Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Schedule from 'magnet-node-schedule';

let app = await magnet([Config, Logger, Schedule]);
```

server/jobs/test.js
```
export default function (app) {
  return {
    test: {
      options: {
        rule: '30 2 * * * *'
      },
      process () {
        console.log('testing')
      }
    },
    test2: {
      options: {
        rule: '10 * * * * *'
      },
      process () {
        console.log('testing 1')
      }
    }
  }
}
```
