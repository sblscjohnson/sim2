const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express()
const massive = require('massive');
const ctrl = require('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set('db', db)
  db.seed()
});

app.get('/api/houses', ctrl.getHouses);

app.post('/api/houses', ctrl.postHouse);

app.delete('/api/houses/:id', ctrl.deleteHouse);

let port = process.env.SERVERPORT
app.listen(port, () => console.log(`Port ${port} finna be lit, fam`))