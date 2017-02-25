import { Module } from 'magnet-core/module'
import * as schedule from 'node-schedule'

export default class NodeSchedule extends Module {
  async setup () {
    this.app.nodeSchedule = schedule
  }
}
