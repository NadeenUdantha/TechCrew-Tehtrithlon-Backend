const express = require('express')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const User = require('../models/user')
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({
      where: {
        UserName: username,
      },
    })
    if (user === null)
      return done(null, false, { message: 'Incorrect username' })

    if (!await bcrypt.compare(password, user.PasswordHash))
      return done(null, false, { message: 'Incorrect password' })

    return done(null, user)
  } catch (err) {
    return done(err)
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.UserName)
})

passport.deserializeUser(async (username, done) => {
  try {
    const user = await User.findOne({
      where: {
        UserName: username,
      },
    })
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
  const { email, username, password } = req.body
  try {
    const user = await User.create({
      UserName: username,
      PasswordHash: await bcrypt.hash(password, 12),
      Email: email,
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
