const Svc = require('../services')

async function get(req, res) {
  const { query: q } = req
  const result = await Svc.Wikipedia.get(q.search)

  return res.json({
    data: result
  })
}

module.exports = {
  get
}
