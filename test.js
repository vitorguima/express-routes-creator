const express = require('express');
const createRoutes = require('./createRoute');

const app = express();

const options = {
  path: 'clientes',
  database: 'mongodb',
  collection: 'clientes',
  controllers: [],
  req: {
    body: {},
    params: 'id',
  }
}

app.use(express.json());
app.use(createRoutes(options));

app.listen(3000, () => console.log('rodando porta 3000'));