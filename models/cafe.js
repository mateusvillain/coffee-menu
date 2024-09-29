const Sequelize = require('../config/sequelize');

module.exports = (sequelize, DataTypes) => {
  const Cafe = sequelize.define('Cafe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Cafe;
};