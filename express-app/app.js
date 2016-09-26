'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var test_func2 = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
		var ret;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return test_func();

					case 2:
						ret = _context.sent;
						return _context.abrupt('return', ret);

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function test_func2() {
		return _ref.apply(this, arguments);
	};
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname + '/../public'));

app.use('/api', function (req, res) {
	var async_ret = test_func2();
	res.send('Hello, World!' + async_ret);
});

var server = app.listen(3000, function () {
	console.log('Express listening on port 3000');
});

function test_func() {
	var promise = new _promise2.default(function (resolve, reject) {
		setInterval(function () {
			resolve('return from test_func after 1sec');
		}, 1000);
	});

	return promise;
}