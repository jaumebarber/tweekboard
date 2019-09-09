const Data = require('./collection')

class Service {
  static retrieveAll () {
    return Data.retrieveAll()
  }
}

module.exports = Service