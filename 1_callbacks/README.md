# 1 - CALLBACKS

---

### [Anterior (0 - Introdução)](../README.md)

---

### High-order functions
High-order functions são funções que cumprem ao menos uma das condições abaixo:
- Recebe uma ou mais funções como argumentos;
- Retorna uma função como resultado;

Podem ser usadas para function currying e partial application, práticas comuns na programação
funcional. Callbacks são um tipo de high-order function, pois entram como argumento de outras
funções. E como seu nome diz, a execução de uma callback é chamada de dentro da sua parent function,
podendo então, retomar o fluxo de execução original de forma não-procedural.
Ou seja, podemos fazer uma requisição a um recurso externo e registrar o processamento desses dados
para quando forem recebidos, mas sem bloquear o resto da execução.

[Exemplo callback](1_callback.js)

### Implementação do NodeJS
Na verdade as APIs do NodeJS não trabalham APENAS com o pattern de callbacks. Operações mais
complexas exigem mais do que saber o seu começo e fim. Numa requisição HTTP, por exemplo,
podemos analisar e/ou fazer stream dos dados assim que eles chegam, mas pra isso precisamos
saber quando esses pedaços (chunks) de dado são recebidos para então fazer o seu processamento.
Para fazer esse acompanhamento de estados intermediários, o NodeJS usa um pattern com
emissores de eventos (event emitters) e ouvintes (listeners). Um ou mais ouvintes se registram para
ouvir eventos disparados em um determinado "canal" e então executam suas funções de callback
predeterminadas. *Mesmo conceito dos watchers do AngularJS*

[Exemplo event emitter](2_eventEmitter.js)

### Problemas
Ok, mas como fica o uso de callbacks num cenário mais real?
Quando precisamos fazer N operações assíncronas encadeadas, ou seja, uma depende do
resultado da outra, corremos o risco de cair no que chamam de callback hell ou pyramid of
doom. É o aninhamento (nesting) de várias funções no melhor estilo Inception... E assim
como no filme, isso confunde muitas pessoas e o nosso código perde muito em legibilidade.

[Exemplo callback hell](3_callbackHell.js)

---

### [Próximo (2 - Promises)](../2_promises/README.md)
