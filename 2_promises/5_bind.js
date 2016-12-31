const primeiro = () => new Promise((resolve, reject) => setTimeout(() => {
  return resolve(1)
}, 1000))

const segundo = (arg1, arg2, primeiro) => new Promise((resolve, reject) => setTimeout(() => {
  return resolve([primeiro, 2])
}, 1000))

const terceiro = (argX, argY, argZ, primeiroEsegundo) =>
new Promise((resolve, reject) => setTimeout(() => {
  return resolve(primeiroEsegundo.concat(3))
}, 1000))

const main = () => {
  return primeiro()
    .then(resultado => segundo.bind(null, 'argumento1', 'argumento2', resultado)())
    .then(outroResultado => {
      return terceiro.bind(null, 'argumentoX', 'argumentoY', 'argumentoZ', outroResultado)()
    })
    .then(final => console.log(final))
}

main()
