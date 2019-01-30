var express = require('express');
var app = express();

app.get('/app', function (req, res) {
  res.send('app이라는 경로로 왔습니다');
});

app.listen(3000, function () {
  console.log('3000포트로 고고 ~~');
});