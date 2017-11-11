const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    console.log('app.get working..');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 9090, () => {
  console.log('App listening on 9090!');
});