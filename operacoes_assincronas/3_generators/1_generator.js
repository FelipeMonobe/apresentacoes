const generator = function*() {
  let indice = 65
  while (indice < 91) {
    yield String.fromCharCode(indice++)
  }
}
const iterator = generator()
const main = () => {
  let done = false

  while (!done) {
    let next = iterator.next()

    done = next.done
    console.log(next.value)
  }
}

main()
