
const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const VisaApplication = require('./visa_application')

const Document = sequelize.define('Document', {
    DocumentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    DocumentType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    FilePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UploadDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
})

VisaApplication.hasMany(Document)

module.exports = Document
