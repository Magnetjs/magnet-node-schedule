import Base from 'magnet-core/base'
import schedule from 'node-schedule'

export default class NodeSchedule extends Base {
  async setup () {
    this.app.nodeSchedule = schedule
  }
}
