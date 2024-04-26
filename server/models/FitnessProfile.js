const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FitnessProfile extends Model {}

FitnessProfile.init({
    // Define the model attributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fitnessGoal: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'fitness_profile'
});

module.exports = FitnessProfile;
