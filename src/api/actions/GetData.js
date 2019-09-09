const Data = require ('../services/data')

class GetData {
  static do () {
    return Data.service.retrieveAll()
  }
}

module.exports = GetData
