const Translations = require('../actions/TranslateAll')

const express = require('express')
const router = express.Router()

router.post('/translate', function (req, res) {
  const message = Translations.do()

  res.send(JSON.stringify(message))
})

module.exports = router
