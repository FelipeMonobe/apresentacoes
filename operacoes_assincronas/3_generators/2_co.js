const request = require('request')
const co = require('co')

const req = (url) =>
new Promise((resolve, reject) =>
request.get(url, (err, res) =>
resolve(res)))

const main = function* () {
  try {
    console.log('ANTES')
    const primeiroJSON = yield req('https://httpbin.org/delay/3')
    console.log('primeiro')
    const segundoJSON = yield req('https://httpbin.org/delay/5')
    console.log('segundo')
    console.log('DEPOIS')
  } catch (e) {
    console.log(`Catch centralizado: ${e}`)
  }
}

co(main)
main()
