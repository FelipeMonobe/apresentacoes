const geraSegundos = () => parseInt((Math.random() * 10000).toFixed(0))
const geraPromise = valor => new Promise((resolve) => {
  return setTimeout(() => {
    console.log(`resolvido valor: ${valor}`)
    return resolve(valor)
  }, geraSegundos())
})
const todos = Promise.all([1,2,3,4,5].map(n => geraPromise(n)))
const main = () => {
  return todos
    .then(valores => console.log(`final: ${valores}`))
}

main()
