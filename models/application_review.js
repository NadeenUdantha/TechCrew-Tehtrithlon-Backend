
const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const VisaApplication = require('./visa_application')

const ApplicationReview = sequelize.define('ApplicationReview', {
    ReviewID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ReviewDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Decision: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Comments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

VisaApplication.hasMany(ApplicationReview)

module.exports = ApplicationReview
