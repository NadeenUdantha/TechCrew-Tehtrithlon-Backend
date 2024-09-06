const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const User = require('./user')

const VisaApplication = sequelize.define('VisaApplication', {
    ApplicationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    VisaType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PurposeOfVisit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IntendedArrivalDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    IntendedDurationOfStay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    AddressInSriLanka: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ApplicationStatus: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SubmissionDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DecisionDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

User.hasMany(VisaApplication)

module.exports = VisaApplication
