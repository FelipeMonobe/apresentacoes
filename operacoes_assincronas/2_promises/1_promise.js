const geraPromise = (msg) => () => {
  console.log(msg)
  return new Promise((resolve, reject) => setTimeout(resolve, 3000))
}
const primeiro = geraPromise(`It's gonna be... wait for it...`)
const segundo = geraPromise('LE..')
const terceiro = geraPromise('GEN..')
const quarto = geraPromise('DARY!')
const main = () => {
  return primeiro()
    .then(segundo)
    .then(terceiro)
    .then(quarto)
}

main()
