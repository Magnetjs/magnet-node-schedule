import { Module } from 'magnet-core/module'
import * as schedule from 'node-schedule'

export default class NodeSchedule extends Module {
  init () {
    this.moduleName = 'nodeSchedule'
  }

  async setup () {
    this.insert(schedule)
  }
}
