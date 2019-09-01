const mongoose = require('mongoose')
const config = require('./../config/index')

process.on('SIGINT', () => {
  // Not sure why, but this connection seems to keep the program from exiting
  mongoose.disconnect()
    .then(() => {
      console.log('Disconnected')
      process.exit()
    })
})

module.exports.connect = () => new Promise((resolve, reject) => {
  console.log('started connecting to mongo', config.mongo.url, config.mongo.dbName)
  mongoose.connect(config.mongo.url, {
    dbName: config.mongo.dbName,
    useNewUrlParser: true
  }, function (err) {
    if (err) {
      console.error(err)
      return reject(err)
    }
    console.log('connected to mongo')
    resolve(mongoose)
  })
})
