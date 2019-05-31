const express = require('express')
const testApi = require('./test.api')
const router = express.Router()

router.get('/test', testApi.get)

router.post('/test', testApi.post)

router.put('/test/:id', testApi.put)

router.delete('/test/:id', testApi.delete)

module.exports = router
