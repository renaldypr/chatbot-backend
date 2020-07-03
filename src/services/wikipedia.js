const { default: axios } = require('axios')
const qs = require('qs')
const _ = require('lodash')

const httpClient = axios.create({
  baseURL: process.env.WIKIPEDIA_URL,
  timeout: 5000,
  paramsSerializer: (params = {}) => {
    return qs.stringify(params, {
      arrayFormat: 'comma',
      skipNulls: true
    })
  }
})

function get(search) {
  return httpClient
    .get('/', {
      params: {
        format: 'json',
        action: 'query',
        prop: 'extracts',
        exintro: '',
        explaintext: '',
        redirects: 1,
        titles: search
      }
    })
    .then(response => transformWikiResponse(response.data))

}

function transformWikiResponse(response) {
  const pages = response.query.pages
  const text = _.get(pages[Object.keys(pages)[0]], 'extract', '')
  return text
}

module.exports = {
  get
}
