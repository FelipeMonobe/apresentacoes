const geraPromiseFn = (msg) => () => {
  console.log(msg)
  return new Promise((resolve, reject) => setTimeout(resolve, 3000))
}
const primeiro = geraPromiseFn(`It's gonna be... wait for it...`)
const segundo = geraPromiseFn('LE..')
const terceiro = () => new Promise(() => { throw 'erro forçado' })
const quarto = geraPromiseFn('DARY!')
const tratar = (err) => console.log(`Tratando: ${err}`)
const main = () => {
  return primeiro()
    .then(segundo)
    .then(terceiro)
    .then(quarto)
    .catch(tratar)
}

main()
