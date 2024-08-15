const { Sequelize } = require('sequelize');

// Crie a conexão com o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Nome do arquivo do banco de dados
});

module.exports = sequelize;
