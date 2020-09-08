var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World FLYHARD 2020/09/09 on Master from Mac Webhook Triggered. 00:14 !');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

