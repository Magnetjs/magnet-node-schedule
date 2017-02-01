'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base2 = require('magnet-core/base');

var _base3 = _interopRequireDefault(_base2);

var _nodeSchedule = require('node-schedule');

var _nodeSchedule2 = _interopRequireDefault(_nodeSchedule);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _mapValues = require('lodash/fp/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _reduce = require('lodash/fp/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _merge = require('lodash/fp/merge');

var _merge2 = _interopRequireDefault(_merge);

var _values = require('lodash/fp/values');

var _values2 = _interopRequireDefault(_values);

var _forEach = require('lodash/fp/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeSchedule = function (_base) {
  _inherits(NodeSchedule, _base);

  function NodeSchedule() {
    _classCallCheck(this, NodeSchedule);

    return _possibleConstructorReturn(this, (NodeSchedule.__proto__ || Object.getPrototypeOf(NodeSchedule)).apply(this, arguments));
  }

  _createClass(NodeSchedule, [{
    key: 'setup',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var config, folderPath, jobFiles;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                config = this.config.hodeSchedule;
                folderPath = config.folderPath || _path2.default.join(process.cwd(), 'server', 'jobs');
                jobFiles = (0, _requireAll2.default)(folderPath);


                (0, _flow2.default)(_values2.default, (0, _mapValues2.default)('default'),
                // Inject app to all file
                (0, _map2.default)(function (jobFile) {
                  return jobFile(_this2.app);
                }),
                // Merge all files in one flat array
                (0, _reduce2.default)(function (combined, process) {
                  return (0, _merge2.default)(combined, process);
                }, []), (0, _forEach2.default)(function (job) {
                  _nodeSchedule2.default.scheduleJob(job.options, job.process);
                }))(jobFiles);

              case 4:
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
}(_base3.default);

exports.default = NodeSchedule;