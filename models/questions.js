const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const question = sequelize.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
   
  },

  Reasonforstartingacompany: {
    type:Sequelize.STRING,
    allowNull: false
  },

  Whatisyourindustry: {
    type:Sequelize.STRING,
    allowNull:false
  },

  Whatisyourexperienceinthisindustry: {
    type:Sequelize.STRING,
    allowNull:false
  },

  Whatisyourbusinessmodel: {
    type:Sequelize.STRING,
    allowNull:false
  },

  Tellusaboutyourproduct: {
    type:Sequelize.STRING,
    allowNull:false
  },

  Whatisyourexitstrategy: {
    type:Sequelize.STRING,
    allowNull:false
  },

  Ifyourproducthasbeenreleased,whattractiondoyouhave: {
    type:Sequelize.STRING,
    allowNull:false
  },

  startup_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
 
  }
});


module.exports = Question;
