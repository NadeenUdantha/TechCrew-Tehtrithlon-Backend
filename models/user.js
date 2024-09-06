
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    PasswordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },

})

module.exports = User
