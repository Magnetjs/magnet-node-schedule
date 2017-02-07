'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/base');

var _base2 = _interopRequireDefault(_base);

var _nodeSchedule = require('node-schedule');

var _nodeSchedule2 = _interopRequireDefault(_nodeSchedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import path from 'path'
// import requireAll from 'require-all'
// import flow from 'lodash/fp/flow'
// import mapValues from 'lodash/fp/mapValues'
// import map from 'lodash/fp/map'
// import reduce from 'lodash/fp/reduce'
// import merge from 'lodash/fp/merge'
// import values from 'lodash/fp/values'
// import forEach from 'lodash/fp/forEach'

var NodeSchedule = function (_Base) {
  _inherits(NodeSchedule, _Base);

  function NodeSchedule() {
    _classCallCheck(this, NodeSchedule);

    return _possibleConstructorReturn(this, (NodeSchedule.__proto__ || Object.getPrototypeOf(NodeSchedule)).apply(this, arguments));
  }

  _createClass(NodeSchedule, [{
    key: 'setup',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.app.nodeSchedule = _nodeSchedule2.default;

                // const config = this.config.nodeSchedule
                // const folderPath = (config && config.folderPath) || path.join(process.cwd(), 'server', 'jobs')
                // const jobFiles = requireAll(folderPath)

                // flow(
                //   values,
                //   mapValues('default'),
                //   // Inject app to all file
                //   map((jobFile) => jobFile(this.app)),
                //   // Merge all files in one flat array
                //   reduce((combined, process) => merge(combined, process), []),
                //   forEach((job) => {
                //     schedule.scheduleJob(job.options, job.process)
                //   })
                // )(jobFiles)

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _ref.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return NodeSchedule;
}(_base2.default);

exports.default = NodeSchedule;