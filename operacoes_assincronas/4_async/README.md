#4 - ASYNC E AWAIT

---

### [Voltar (3 - Generators)](../3_generators/README.md)

---

### Quando?
A proposta da funcionalidade **async** e **await** já está finalizada. Infelizmente, a expectativa de
publicação da mesma está prevista apenas para o **ES2017** (http://node.green/). Contudo, já é possível utilizá-lo
através da flag **--harmony**, a partir da versão 7.2.0 do NodeJS.

Como usar executar um script com a flag harmony:
`node --harmony /path/meuScriptComAsync.js`

### O que é?
Em resumo, pode-se dizer que o **async/await** é uma implementação nativa da mecânica de **generators**
para trabalharem com promises, como é feito com **co** ou **coroutine** do **Bluebird**.

[Exemplo async/await](1_async.js)

### Benefícios
É vida demais.

### Problema
Pelo seu estágio e necessidades especiais de uso, ainda **NÃO** é recomendado este recurso em
ambiente de produção, já que podem haver mudanças no seu funcionamento. Aconselho a usar generators
e yield pois suas bibliotecas já foram testadas em produção.
Porém, é interessante podermos nos antecipar e aprender a usar o que está pra vir.

---

### [Voltar (5 - Conclusão)](../5_conclusao/README.md)

---
