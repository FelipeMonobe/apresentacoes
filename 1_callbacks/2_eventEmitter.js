const EventEmitter = require('events').EventEmitter

const emitter = new EventEmitter()
const incrementaEemite = () => {
  contador++
  return emitter.emit('meuEvento', contador)
}
const main = () => {
  setInterval(incrementaEemite, 1000)
  return emitter.on('meuEvento', (valor) => {
    if (valor % 3 === 0) return console.log(`Valor do contador: ${valor}`)
    return null
  })
}

let contador = 0

main()
