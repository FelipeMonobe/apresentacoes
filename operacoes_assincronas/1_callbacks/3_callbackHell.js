const path = require('path')
const fs = require('fs')

const arquivoLog = path.resolve('3_callbackHell.log')
const logTemplate = (msg) => `[${new Date().toISOString()}] ${msg}\n`
const equacao = {
  coeficientes: {
    a: 1,
    b: 4,
    c: -21,
  },
}
const biblioteca = {
  somar: (x, y, cb) => cb(x + y),
  subtrair: (x, y, cb) => cb(x - y),
  multiplicar: (x, y, cb) => cb(x * y),
  dividir: (x, y, cb) => cb(x / y),
  raiz: (x, y, cb) => cb(Math.pow(x, 1 / y)),
}

function main() {
  const primeiraMsg = `${equacao.coeficientes.a}x² + ${equacao.coeficientes.b}y + ${equacao.coeficientes.c}`

  console.log(`\n\n${primeiraMsg}`)

  return fs.appendFile(arquivoLog, logTemplate(primeiraMsg), function() {
    return biblioteca.multiplicar(equacao.coeficientes.b, equacao.coeficientes.b, function(bCube) {
      return fs.appendFile(arquivoLog, logTemplate(`b² = ${equacao.coeficientes.b}² = ${bCube}`), function() {
        return biblioteca.multiplicar(4, equacao.coeficientes.a, function(a4) {
          return fs.appendFile(arquivoLog, logTemplate(`4a = 4 * ${equacao.coeficientes.a} = ${a4}`), function() {
            return biblioteca.multiplicar(a4, equacao.coeficientes.c, function(ac4) {
              return fs.appendFile(arquivoLog, logTemplate(`4ac = ${a4} * ${equacao.coeficientes.c} = ${ac4}`), function() {
                return biblioteca.subtrair(bCube, ac4, function(delta) {
                  return fs.appendFile(arquivoLog, logTemplate(`Δ = ${bCube} - ${ac4} = ${delta}`), function() {
                    return biblioteca.raiz(delta, 2, function(deltaSqrt) {
                      return fs.appendFile(arquivoLog, logTemplate(`√(Δ) = √(${delta}) = ${deltaSqrt}`), function() {
                        biblioteca.somar(equacao.coeficientes.b * -1, deltaSqrt, function(numerador) {
                          return fs.appendFile(arquivoLog, logTemplate(`-b + √(Δ) = ${equacao.coeficientes.b * -1} + ${deltaSqrt} = ${numerador}`), function() {
                            return biblioteca.dividir(numerador, 2, function(resultado) {
                              return fs.appendFile(arquivoLog, logTemplate(`resultado1 = ${numerador} / 2 = ${resultado}`), function() {
                                return console.log(`Primeira raiz = ${resultado}`)
                              })
                            })
                          })
                        })

                        biblioteca.subtrair(equacao.coeficientes.b * -1, deltaSqrt, function(numerador) {
                          return fs.appendFile(arquivoLog, logTemplate(`-b - √(Δ) = ${equacao.coeficientes.b * -1} - ${deltaSqrt} = ${numerador}`), function() {
                            return biblioteca.dividir(numerador, 2, function(resultado) {
                              return fs.appendFile(arquivoLog, logTemplate(`resultado2 = ${numerador} / 2 = ${resultado}`), function() {
                                return console.log(`Segunda raiz = ${resultado}`)
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

main()
