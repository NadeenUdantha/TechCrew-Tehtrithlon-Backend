const express = require('express')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const User = require('../models/user')
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    })
    if (user === null)
      return done(null, false, { message: 'Incorrect username' })

    if (!await bcrypt.compare(password, user.password))
      return done(null, false, { message: 'Incorrect password' })

    return done(null, user)
  } catch (err) {
    return done(err)
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.username)
})

passport.deserializeUser(async (username, done) => {
  try {
    const user = await User.findByPk(username)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const router = express.Router()

router.post('/login',
  passport.authenticate('local', {
    session: true,
  }),
  (req, res) => res.status(200).end(),
)

router.post('/signup', async (req, res) => {
  const { email, username, password, country } = req.body
  try {
    const user = await User.create({
      username,
      password: await bcrypt.hash(password, 12),
      email,
      country,
    })
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/logout', (req, res, next) => {
  req.logout(err => {
    if (err)
      next(err)
    else
      res.status(200).end()
  })
})

module.exports = router
