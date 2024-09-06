require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')

const auth = require('./routes/auth')
const visa = require('./routes/visa')
const sequelize = require('./db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/auth', auth)
app.use('/api/visa', visa)

sequelize.sync({
    //alter: true,
})

module.exports = app
