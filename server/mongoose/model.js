require('dotenv').config()
const mongoose = require('mongoose')
const schema = require('./schema')
const { DB_NAME, DB_USER, DB_PASS } = process.env
const db = mongoose.connection
const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('Connecting mongodb!')
  })

  // Atlas mongo cluster와 연결
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.glzxe.mongodb.net/?retryWrites=true&w=majority`
  )

  // 스키마 연결
  // const retrunModel = {}
  // schema.array.forEach((key) => {
  //   retrunModel[key] = mongoose.model(key, schema[key])
  // })
  // return retrunModel

  const model = {}
  for (const key in schema) {
    model[key] = mongoose.model(key, schema[key])
  }
  return model
})()
module.exports = model
