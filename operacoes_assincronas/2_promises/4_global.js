const primeiro = () => new Promise((resolve, reject) => setTimeout(() => {
  resultado.primeiro = 1
  resultados.push(1)
  return resolve()
}, 1000))

const segundo = () => new Promise((resolve, reject) => setTimeout(() => {
  resultado.segundo = 2
  resultados.push(2)
  return resolve()
}, 1000))

const terceiro = () => new Promise((resolve, reject) => setTimeout(() => {
  resultado.terceiro = 3
  resultados.push(3)
  return resolve()
}, 1000))

const resultados = []
const resultado = {}
const main = () => {
  return primeiro()
    .then(segundo)
    .then(terceiro)
    .then(() => console.log(`array: ${resultados}\nobjeto: ${JSON.stringify(resultado)}`))
}

main()
