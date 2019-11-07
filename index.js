'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => { //req = request, res = resive
  res.send('Hello! Testing my Node server')
});

app.get('/demo', (req, res) => {
  console.log('request', req);
  res.send('demo, Hello Hello, just testing..');
})

app.listen(3000, () => {
  console.log('server app start?');
});