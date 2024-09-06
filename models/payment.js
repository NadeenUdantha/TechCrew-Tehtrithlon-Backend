
const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const VisaApplication = require('./visa_application')

const Payment = sequelize.define('Payment', {
    PaymentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    PaymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    PaymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PaymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

VisaApplication.hasOne(Payment)

module.exports = Payment
