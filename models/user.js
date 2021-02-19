'use strict';
const {
  Model
} = require('sequelize');

const hashPassword = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    User_name:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    } ,
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:{
          args:true,
          msg: 'must be email format'
        }
      },unique: true
    } ,
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:{
          args: [6],
          msg: 'password more than 6 character'
        }
      },
      unique: true
    } 
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate:(user,option)=>{
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};