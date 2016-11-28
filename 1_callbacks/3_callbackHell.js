const path = require('path');
const fs = require('fs');

const logFile = path.resolve('./exemplos/callbacks/3_callbackHell.log');
const logTemplate = (msg) => `[${new Date().toISOString()}] ${msg}\n`;
const equation = {
  coefficients: {
    a: 1,
    b: 4,
    c: -21
  }
};
const library = {
  sum: (x, y, cb) => cb(x + y),
  subtract: (x, y, cb) => cb(x - y),
  multiply: (x, y, cb) => cb(x * y),
  divide: (x, y, cb) => cb(x / y),
  root: (x, y, cb) => cb(Math.pow(x, 1 / y)),
};

function main() {
  const firstMsg = `${equation.coefficients.a}x² + ${equation.coefficients.b}y + ${equation.coefficients.c}`;

  console.log(`\n\n${firstMsg}`);

  return fs.appendFile(logFile, logTemplate(firstMsg), function() {
    return library.multiply(equation.coefficients.b, equation.coefficients.b, function(bCube) {
      return fs.appendFile(logFile, logTemplate(`b² = ${equation.coefficients.b}² = ${bCube}`), function() {
        return library.multiply(4, equation.coefficients.a, function(a4) {
          return fs.appendFile(logFile, logTemplate(`4a = 4 * ${equation.coefficients.a} = ${a4}`), function() {
            return library.multiply(a4, equation.coefficients.c, function(ac4) {
              return fs.appendFile(logFile, logTemplate(`4ac = ${a4} * ${equation.coefficients.c} = ${ac4}`), function() {
                return library.subtract(bCube, ac4, function(delta) {
                  return fs.appendFile(logFile, logTemplate(`Δ = ${bCube} - ${ac4} = ${delta}`), function() {
                    return library.root(delta, 2, function(deltaSqrt) {
                      return fs.appendFile(logFile, logTemplate(`sqrt(Δ) = sqrt(${delta}) = ${deltaSqrt}`), function() {
                        library.sum(equation.coefficients.b * -1, deltaSqrt, function(numerator) {
                          return fs.appendFile(logFile, logTemplate(`-b + sqrt(Δ) = ${equation.coefficients.b * -1} + ${deltaSqrt} = ${numerator}`), function() {
                            return library.divide(numerator, 2, function(result) {
                              return fs.appendFile(logFile, logTemplate(`result1 = ${numerator} / 2 = ${result}`), function() {
                                console.log(`Primeira raiz = ${result}`);
                              });
                            });
                          });
                        });

                        library.subtract(equation.coefficients.b * -1, deltaSqrt, function(numerator) {
                          return fs.appendFile(logFile, logTemplate(`-b - sqrt(Δ) = ${equation.coefficients.b * -1} - ${deltaSqrt} = ${numerator}`), function() {
                            return library.divide(numerator, 2, function(result) {
                              return fs.appendFile(logFile, logTemplate(`result2 = ${numerator} / 2 = ${result}`), function() {
                                console.log(`Segunda raiz = ${result}`);
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

main();
