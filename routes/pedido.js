const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');
const Cafe = require('../models/cafe'); // Importar o modelo de Café

// Rota para criar um novo pedido
router.post('/', async (req, res) => {
  try {
    const { cafeId, quantidade, nome } = req.body;

    // Buscar o café pelo ID para obter o preço
    const cafe = await Cafe.findByPk(cafeId);

    const pedido = await Pedido.create({
      cafeId,
      quantidade,
      nome,
      dataPedido: new Date(), // Registrar a data e hora do pedido
    });
    res.status(201).json({ message: 'Pedido realizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }
});

module.exports = router;