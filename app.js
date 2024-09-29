const express = require('express');
const Sequelize = require('./config/sequelize');
const Cafe = require('./models/cafe');
const Pedido = require('./models/pedido');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para utilizar EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para permitir que o Express entenda JSON
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  // Lógica para renderizar a página inicial
  res.render('index', { title: 'Meu Café' });
});

app.use('/pedidos', require('./routes/pedido'));

// Sincronizando com o banco de dados
Sequelize.sync({ force: false })
  .then(() => {
    console.log('Conectado ao banco de dados!');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });