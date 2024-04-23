
// imported sequelize
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

// creates user class which inherits sequlize Model class properties
class User extends Model {};


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

          name:{
            type:DataTypes.STRING,
            allowNull:false
          },
         

          email: {
            type: DataTypes.STRING,
            allowNull: false,
        
         
          },



          password: {
            type: DataTypes.STRING,
            allowNull: false,
        
         
          },
   
          
    },


    {    // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        underscored: true,
        modelName: 'user'}

)







module.exports = User;