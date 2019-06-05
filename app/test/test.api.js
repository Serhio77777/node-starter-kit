const HttpError = require('../errors/http.errors')
const testValidator = require('../validators/schema.validator')
const newTestValidatorSchema = require('./validators/new.test.validator')
const updateTestValidatorSchema = require('./validators/edit.test.validator')

const Api = {
  get (req, res, next) {
    // do something
    // if all fine sent response
    // res.status(200).send('it`s work')
    // if some error here
    // create new http error with status and message
    next(new HttpError('Something wrong', 400).toJSON())
  },
  post (req, res, next) {
    const valid = testValidator(newTestValidatorSchema, req.body.data)
    res.status(200).send({ valid: valid })
  },
  put (req, res, next) {
    const valid = testValidator(updateTestValidatorSchema, req.body.data)
    res.status(200).send({ valid: valid })
  },
  delete (req, res, next) {
    res.status(200).send()
  }
}

module.exports = Api
