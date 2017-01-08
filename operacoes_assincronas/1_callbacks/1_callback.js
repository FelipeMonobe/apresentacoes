const callback = () => console.log('LEGENDARY!')
const esperaDepoisCallback = (cb) => {
  console.log(`It's gonna be... wait for it...`)
  return setTimeout(cb, 3000)
}
const main = () => esperaDepoisCallback(callback)

main()
