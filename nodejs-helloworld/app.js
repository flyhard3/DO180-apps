var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World FLYHARD 2020/09/10 on Master from Mac Webhook Triggered. 11:57 !');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

