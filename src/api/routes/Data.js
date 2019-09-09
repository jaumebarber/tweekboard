const Data = require('../actions/GetData')

const express = require('express')
const router = express.Router()

router.post('/data', function (req, res) {
  const message = Data.do()

  res.send(JSON.stringify(message))
})

module.exports = router
