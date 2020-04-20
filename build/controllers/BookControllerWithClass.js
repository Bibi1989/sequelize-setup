"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _index = _interopRequireDefault(require("../database/models/index"));

var _sequelize = require("sequelize");

var BookQuery = /*#__PURE__*/function () {
  function BookQuery() {
    (0, _classCallCheck2["default"])(this, BookQuery);
  }

  (0, _createClass2["default"])(BookQuery, null, [{
    key: "getAllBooks",
    value: function () {
      var _getAllBooks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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

      function getAllBooks() {
        return _getAllBooks.apply(this, arguments);
      }

      return getAllBooks;
    }()
  }, {
    key: "getABook",
    value: function () {
      var _getABook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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

      function getABook() {
        return _getABook.apply(this, arguments);
      }

      return getABook;
    }()
  }, {
    key: "addBook",
    value: function () {
      var _addBook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
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

      function addBook() {
        return _addBook.apply(this, arguments);
      }

      return addBook;
    }()
  }, {
    key: "updateBook",
    value: function () {
      var _updateBook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _index["default"].Book.update(book, {
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                _context4.next = 8;
                break;

              case 5:
                _context4.prev = 5;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", _context4.t0.message);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 5]]);
      }));

      function updateBook() {
        return _updateBook.apply(this, arguments);
      }

      return updateBook;
    }()
  }, {
    key: "deleteBook",
    value: function () {
      var _deleteBook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _index["default"].Book.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", _context5.t0.message);

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function deleteBook() {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }]);
  return BookQuery;
}();

exports["default"] = BookQuery;
//# sourceMappingURL=BookControllerWithClass.js.map