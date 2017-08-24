const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/bundle.js'));
});

app.listen(3000, () => {
  console.log('server running on 3000');
})
