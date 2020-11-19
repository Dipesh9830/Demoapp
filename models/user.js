const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const user = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    
    
  },
  username: {
    type:Sequelize.STRING,
    allowNull: false
  },
  password: {
    type:Sequelize.STRING,
    allowNull:false
  },
  email: {
    type:Sequelize.STRING,
    allowNull:false
  },
  startup_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primarykey: true
  }
});

module.exports = User;
