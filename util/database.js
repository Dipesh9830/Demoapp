const Sequelize = require('sequelize');

const sequelize = new Sequelize('incubator-app', 'root', 'dIpesh5$%', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
