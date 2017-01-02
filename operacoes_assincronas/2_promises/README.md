#2 - PROMISES

---

### [Voltar (1 - Callbacks)](../1_callbacks/README.md)

---

### Definição
Tendo em vista as complicações do encadeamento de callbacks e error handling, surgiu uma
nova solução. As **promises**. Elas são como tokens ou promessas. Quando as usamos, o código executa um tipo
de função chamada **executor**, parecida com um callback, que recebe argumentos **resolve** e **reject**. O
executor requisita o dado externo, e te retorna a promise em status **pending**. Quando a requisição é
completada e o executor resolvido a promise muda para **fulfilled**, o token é substituído pelo valor real do dado
externo. Se o executor for rejeitado a promise muda para promise **rejected** e no valor é recebido o erro.

![Fundamentos](../images/2_promises_1.png)

### Bibliotecas
Inicialmente para usar promises era preciso adicionar bibliotecas como o **Q** (http://documentup.com/kriskowal/q/) ou o
**Bluebird** (http://bluebirdjs.com/docs/getting-started.html), mas com a chegada do ES2015, o Javascript ganhou sua implementação nativa de
Promises. É muito debatido se ainda compensa usar essas bibliotecas. Há benchmarks que
apontam melhor performance e menor custo com o uso do **Bluebird** comparado ao nativo, além
de ter mais funcionalidades.

** Algumas bibliotecas disponibilizam uma função que transforma callbacks das APIs
assíncronas do NodeJS em promises.

### Métodos
Uma promise conta com os seguinte métodos:
- **then(fn)**: encadeia uma função a ser executada assim que a promise da anterior resolver. Esta
função recebe como argumento o valor resolvido;
- **catch(fn)**: como em um try-catch convencional, mas podemos tratar o erro de uma série de
promises encadeadas de forma centralizada;
- **race(iterable)**: recebe um grupo de promises, executa-as em paralelo e retorna uma nova
promise central. A primeira do grupo a ser resolvida, retorna o seu valor e cancela as outras;
- **all(iterable)**: parecido com o race, mas a promise central se resolve apenas quando todas
as outras também tiverem. O valor retornado é um array com todos os valores das promises resolvidas;
- **resolve(any)**: resolve uma promise retornando qualquer valor como tipo;
- **reject(string)**: rejeita uma promise retornando o motivo do erro;

A capacidade das promises serem encadeadas adicionando novas funções com o **then** resolveu o
problema anterior dos callbacks, trazendo muito mais organização. Como visto a seguir.

[Exemplo promise](1_promise.js)<br>
[Exemplo catch](2_catch.js)<br>
[Exemplo all](3_all.js)<br>

### Benefícios
Resumindo, as promises trouxeram muito mais **funcionalidades** e melhor **gerenciamento** para
operações assíncronas. Além de possibilitarem um código muito mais **organizado, legível**. Atualmente,
mesmo na versão LTS do NodeJS, já temos promises **nativas** implementadas.

### Problema
O problema com as promises é causado por duas mecânicas: **escopo de funções** e os próprios
**callbacks** passados como argumento dos métodos then. Imagine que precisamos executar uma
série de funções encadeadas mas que cada função depende do retorno da promise anterior.
Até então, este é o cenário ideal. Porém, e se precisássemos carregar valores de outras
funções que não as diretamente anteriores? Por causa do escopo das funções, os callbacks só
terão acesso aos **seus** argumentos. O Promise.all não serve pois executa em paralelo. Seguem
algumas soluções não elegantes ao problema:

[Exemplo global](4_global.js)<br>
[Exemplo bind](5_bind.js)<br>

---

### [Avançar (3 - Generators)](../3_generators/README.md)

---
