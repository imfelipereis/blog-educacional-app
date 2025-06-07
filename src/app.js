const express = require('express');
const app = express();

app.use(express.json());

// Teste para validar API rodando
app.get('/', (req, res) => {
  res.send('API está rodando');
});

module.exports = app;