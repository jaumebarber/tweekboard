const api = require('./api')
const port = process.env.PORT || 3001

api.listen(port, () => console.log(`Tweekboard API is listening on port ${port}!`))
