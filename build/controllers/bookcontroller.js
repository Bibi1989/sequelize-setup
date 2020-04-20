"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBook = exports.updateBook = exports.addBook = exports.getABook = exports.getAllBooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("../database/models/index"));

var _sequelize = require("sequelize");

var getAllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].Book.findAll();

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0.message);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function getAllBooks() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllBooks = getAllBooks;

var getABook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].Book.findOne({
              where: {
                id: Number(id)
              }
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0.message);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getABook(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getABook = getABook;

var addBook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(book) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].Book.create(book);

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0.message);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function addBook(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.addBook = addBook;

var updateBook = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(book, id) {
    var found, updatedBook;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index["default"].Book.findOne({
              where: {
                id: Number(id)
              }
            });

          case 2:
            found = _context4.sent;
            _context4.prev = 3;

            if (!found) {
              _context4.next = 10;
              break;
            }

            _context4.next = 7;
            return _index["default"].Book.update(book, {
              where: {
                id: Number(id)
              }
            });

          case 7:
            updatedBook = _context4.sent;

            if (!updatedBook) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", book);

          case 10:
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", _context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 12]]);
  }));

  return function updateBook(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateBook = updateBook;

var deleteBook = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var found;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _index["default"].Book.findOne({
              where: {
                id: Number(id)
              }
            });

          case 2:
            found = _context5.sent;
            _context5.prev = 3;

            if (!found) {
              _context5.next = 8;
              break;
            }

            _context5.next = 7;
            return _index["default"].Book.destroy({
              where: {
                id: Number(id)
              }
            });

          case 7:
            return _context5.abrupt("return", _context5.sent);

          case 8:
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](3);
            return _context5.abrupt("return", _context5.t0.message);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 10]]);
  }));

  return function deleteBook(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteBook = deleteBook;
//# sourceMappingURL=bookcontroller.js.map