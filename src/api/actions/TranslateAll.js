const Translations = require ('../services/translations')

class TranslateAll {
  static do () {
    return Translations.service.retrieveAll()
  }
}

module.exports = TranslateAll
