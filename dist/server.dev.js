"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

var port = process.env.PORT;
app.get('/', function (req, res) {
  res.send('hello world');
});
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});