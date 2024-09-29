const express = require('express');
const Sequelize = require('../config/sequelize');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const router = express.Router();
const Cafe = require('../models/cafe');

// Criar a conexão com o banco de dados
const pool = mysql.createPool({
    host: 'mv_database.vpshost8894.mysql.dbaas.com.br',
    user: 'mv_database',
    password: 'M4t3u598@',
    database: 'mv_database'
});

// Consultas
pool.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
        console.error('Erro ao consultar o banco de dados:', err);
        return;
    }
    console.log(results); // Imprime os resultados da consulta
});

pool.query('SELECT * FROM pedidos', (err, results) => {
    if (err) {
        console.error('Erro ao consultar o banco de dados:', err);
        return;
    }
    console.log(results); // Imprime os resultados da consulta
});

// Cafés
function listarCafes(callback) {
    pool.query('SELECT * FROM cafes', (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
}

// Chamando a função para listar os cafés
listarCafes((err, results) => {
    if (err) {
        console.error('Erro ao listar os cafés:', err);
    } else {
        console.log(results); // Imprime os resultados da consulta no console
    }
});

// Configuração do EJS
app.set('view engine', 'ejs');

// Rota para listar os cafés
app.get('/', (req, res) => {
    listarCafes((err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar os cafés');
        } else {
            res.render('index', { cafes: results });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

router.get('/', async (req, res) => {
    const cafes = await Cafe.findAll();
    res.render('index', { cafes });
  });
  
module.exports = router;