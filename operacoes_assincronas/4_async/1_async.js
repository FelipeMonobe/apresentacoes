const request = require('request')

const req = (url) =>
new Promise((resolve, reject) =>
request.get(url, (err, res) =>
resolve(res)))

const main = async function () {
  try {
    console.log('ANTES')
    const primeiroJSON = await req('https://httpbin.org/delay/3')
    console.log('primeiro')
    const segundoJSON = await req('https://httpbin.org/delay/5')
    console.log('segundo')
    console.log('DEPOIS')
  } catch (e) {
    console.log(`Catch centralizado: ${e}`)
  }
}

main()
