#3 - GENERATORS

---

### [Voltar (2 - Promises)](../2_promises/README.md)

---

### Definição
**Generators** vieram com a "nova" versão ES2015 do Javascript. Na verdade, estes servem como **factories
de iterators**. Iterators nada mais são que objetos que tem habilidade de percorrer itens, um por um,
de um **iterable** (strings, arrays, maps, sets).

Para não termos que definir manualmente um iterator, usaremos uma função generator para tal. Temos
que adicionar o spark (asterisco) entre a palavra reservada **function** e seus parenteses. Com isto
feito, podemos utilizar outra palavra reservada, o **yield**. Este pausa a sequência de execução da
sua função generator até que o valor seja resolvido e retornado. Esta função se encaixa muito bem
junto com a mecânica das promises, mas além disso, te possibilita manter dentro do escopo do
**contexto original**.

[Exemplo generator](1_generator.js)<br>

### Bibliotecas
Já existem bibliotecas que fazem o controle de valores yielded dos iterators ao se resolver
promises, estas libs foram testadas extensivamente, inclusive em ambiente de produção. Não há
necessidade de refazermos este trabalho.
Para podermos usar o **yield** com Promises, podemos usar o **Bluebird** e seu método **coroutine**
(http://bluebirdjs.com/docs/api/promise.coroutine.html) que recebe uma função do tipo generator
como argumento. Ou também a biblioteca **co** (https://github.com/tj/co), usado no framework KoaJS,
usado da mesma forma que o **coroutine**.

[Exemplo co](2_co.js)

### Benefícios
Resumindo, com generators, podemos trabalhar com operações assíncronas de **forma muito semelhante ao
síncrono**, seguindo a sequência de execução de forma mais **linear**. Além disso, temos a vantagem
de manter o **contexto de execução** na mesma função, podendo utilizar variáveis no **escopo**.
Também já está disponível na versão LTS do NodeJS.

### Problema
Não tem implementação nativa para trabalharmos com generators e promises. Para isso precisamos de
alguma das bibliotecas citadas.

---

### [Voltar (4 - Async e await)](../4_async/README.md)

---
