const express = require('express')
const HttpError = require('../../web-validator/http.errors')
const validator = require('../../web-validator/validate-middleware')
const testValidatorSchema = require('./validator')

const router = express.Router()

router.get('/test', (req, res, next) => {
  // do something
  // if all fine sent response
  // res.status(200).send('it`s work')
  // if some error here
  // create new http error with status and message
  next(new HttpError('Something wrong', 400).toJSON())
})

router.post('/test', validator(testValidatorSchema.create), (req, res, next) => {
  res.status(200).send({ message: 'post test request success' })
})

router.put('/test/:id', validator(testValidatorSchema.update), (req, res, next) => {
  res.status(200).send({ message: 'put test request success' })
})

router.delete('/test/:id', (req, res, next) => {
  res.status(200).send()
})

module.exports = router
