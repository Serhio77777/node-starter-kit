const express = require('express')

const router = express.Router()

router.get('/test', (req, res, next) => {
    res.send(data)
})

router.post('/test', (req, res, next) => {
    res.status(200).send()
})

router.put('/test/:id', (req, res, next) => {
    res.status(200).send()
})

router.delete('/test/:id', (req, res, next) => {
    res.status(200).send()
})

module.exports = router
