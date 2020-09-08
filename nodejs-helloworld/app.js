var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World FLYHARD 2020/09/08 on Master from Mac Webhook Triggered. !');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

