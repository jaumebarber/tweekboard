const en = require ('./en')

class Service {
  static retrieveAll () {
    return en.retrieveTranslations()
  }
}

module.exports = Service
