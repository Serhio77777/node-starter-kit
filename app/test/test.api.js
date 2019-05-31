const HttpError = require('../errors/http.errors')

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
        res.status(200).send()
    },
    put (req, res, next) {
        res.status(200).send()
    },
    delete (req, res, next) {
        res.status(200).send()
    }
}

module.exports = Api
