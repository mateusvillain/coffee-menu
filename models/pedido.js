const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cafe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cafe',
        key: 'id'
      }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nome_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_hora: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  });

  return Pedido;
};