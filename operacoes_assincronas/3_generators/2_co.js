const request = require('request')
const co = require('co')

const req = (url) =>
new Promise((resolve, reject) =>
request.get(url, (err, res) =>
resolve(res)))

const main = function* () {
  console.log('ANTES')
  const felinosJSON = yield req('http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC')
  const caninosJSON = yield req('http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC')
  console.log(`felinos: ${JSON.stringify(felinosJSON).length}`)
  console.log(`caninos: ${JSON.stringify(caninosJSON).length}`)
  console.log('DEPOIS')
}

co(main)
main()
