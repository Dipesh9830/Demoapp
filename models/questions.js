module.exports = (sequelize, DataTypes) => {

const question = sequelize.define('questions', {
  startup_id: {
    primaryKey: true,
    defaultValue: DataTypes.UUID,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  Reason_for_starting_a_company: {
    type:DataTypes.STRING,
    allowNull: false
  },

  What_is_your_industry: {
    type:DataTypes.STRING,
    allowNull:false
  },

  What_is_your_experience_in_this_industry: {
    type:DataTypes.STRING,
    allowNull:false
  },

  What_is_your_businessmodel: {
    type:DataTypes.STRING,
    allowNull:false
  },

  Tell_us_about_your_product: {
    type:DataTypes.STRING,
    allowNull:false
  },

  What_is_your_exit_strategy: {
    type:DataTypes.STRING,
    allowNull:false
  },

  If_your_product_has_been_released_what_traction_do_you_have: {
    type:DataTypes.STRING,
    allowNull:false
  },
});


return question;
}