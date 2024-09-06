
const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const ApplicationReview = require('./application_review')

const OfficerAccount = sequelize.define('OfficerAccount', {
    OfficerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    Role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastLoginDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
})

OfficerAccount.hasMany(ApplicationReview)

module.exports = ApplicationReview
