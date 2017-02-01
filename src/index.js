import base from 'magnet-core/base'
import schedule from 'node-schedule'
import path from 'path'
import requireAll from 'require-all'
import flow from 'lodash/fp/flow'
import mapValues from 'lodash/fp/mapValues'
import map from 'lodash/fp/map'
import reduce from 'lodash/fp/reduce'
import merge from 'lodash/fp/merge'
import values from 'lodash/fp/values'
import forEach from 'lodash/fp/forEach'

export default class NodeSchedule extends base {
  async setup () {
    const config = this.config.nodeSchedule
    const folderPath = (config && config.folderPath) || path.join(process.cwd(), 'server', 'jobs')
    const jobFiles = requireAll(folderPath)

    flow(
      values,
      mapValues('default'),
      // Inject app to all file
      map((jobFile) => jobFile(this.app)),
      // Merge all files in one flat array
      reduce((combined, process) => merge(combined, process), []),
      forEach((job) => {
        schedule.scheduleJob(job.options, job.process)
      })
    )(jobFiles)
  }
}
