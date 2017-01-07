const path = require('path')
const fs = require('fs')

const caminhoDoArquivoBase = path.resolve('arquivoBase.txt')
const caminhoDoArquivoNovo = path.resolve('arquivoNovo.txt')
const main = () => {
  try {
    fs.readFile(caminhoDoArquivoBase, (erro, conteudo) => {
      if (erro) throw erro

      console.log('[arquivoBase.txt] lido')

      fs.writeFileSync(caminhoDoArquivoNovo, conteudo)
      console.log('[arquivoNovo.txt] criado')
    })

    fs.unlinkSync(caminhoDoArquivoNovo)
    console.log('[arquivoNovo.txt] apagado')
  } catch (e) {
    console.log(`deu um erro ai... ${e.code}`)
  }
}

main()
