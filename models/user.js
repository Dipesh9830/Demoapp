module.exports = (sequelize, DataTypes) => {

const user = sequelize.define('users', {
  id: {
    primaryKey: true,
    defaultValue: DataTypes.UUID,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type:DataTypes.STRING,
    allowNull: false
  },
  password: {
    type:DataTypes.STRING,
    allowNull:false
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false
  },
  startup_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

return user;
}