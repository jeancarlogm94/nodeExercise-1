const { Sequelize, DataTypes } = require('sequelize');

// Connect to database

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '941026',
  port: 5432,
  database: 'records',
  logging: false,
});

module.exports = { db, DataTypes };
