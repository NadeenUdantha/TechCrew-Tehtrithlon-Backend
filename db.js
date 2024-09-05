
const { Sequelize } = require('sequelize')
const pg = require('pg')

const sequelize = new Sequelize(process.env.DB_URI, {
    dialect: 'postgres',
    dialectModule: pg,
})

module.exports = sequelize
