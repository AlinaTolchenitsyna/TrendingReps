const { DataTypes } = require('sequelize');
const sequelize = require('./database');

// Define Repository Model
const Repository = sequelize.define('Repository', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Repository;