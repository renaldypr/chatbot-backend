const devEnv = require(__dirname + '/env.local.json')
require('util').inspect.defaultOptions.depth = null

Object.keys(devEnv).forEach(key => {
  process.env[key] = devEnv[key]
})

const app = require('./app')
const PORT = process.env.PORT || 4005

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
