const { Sequelize } = require('sequelize');

// Connecting to the database
const sequelize = new Sequelize('trending_repos', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;