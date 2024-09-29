const Sequelize = require('sequelize');

const sequelize = new Sequelize('mv_database', 'mv_database', 'M4t3u598@', {
    host: 'mv_database.vpshost8894.mysql.dbaas.com.br',
    dialect: 'mysql'
});

module.exports = sequelize;