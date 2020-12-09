var express = require('express');
var compression = require('compression')
var path = require("path");

var app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, "../dist")));

app.listen(3000);
console.log("本地测试服务器已经启动: http://localhost:" + 3000);
