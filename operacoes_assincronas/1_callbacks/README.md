# 1 - CALLBACKS

---

### [Voltar (0 - Introdução)](../0_introducao/README.md)

---

### High-order functions
High-order functions são funções que cumprem ao menos uma das condições abaixo:
- Recebe uma ou mais funções como **argumentos**;
- Retorna uma função como **resultado**;

Podem ser usadas para function **currying** e **partial application** (https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8), práticas comuns na programação
funcional. **Callbacks** são argumentos de uma high-order function. E como seu pŕoprio
nome indica, a execução de uma callback é chamada de dentro da high-order function para 
retomar o fluxo de execução original de forma **não-procedural**.
Ou seja, podemos fazer uma requisição a um recurso externo e registrar o pós-processamento desses dados
para quando forem recebidos, mas sem bloquear o resto da execução.

[Exemplo callback](1_callback.js)

### Implementação do NodeJS
Na verdade as APIs do NodeJS não trabalham **APENAS** com o pattern de callbacks. Operações mais
complexas exigem mais do que saber o seu começo e fim. Numa requisição HTTP, por exemplo,
podemos analisar e/ou fazer **stream** dos dados assim que eles chegam, mas pra isso precisamos
saber quando esses pedaços (chunks) de dado são recebidos para então fazer o seu processamento.
Para fazer esse acompanhamento de estados intermediários, o NodeJS usa um **pattern** com
emissores de eventos (event emitters) e ouvintes (listeners). Um ou mais **ouvintes** se registram para
ouvir eventos disparados em um determinado **"canal"** e então executam suas funções de callback
predeterminadas. *Mesmo conceito dos watchers do AngularJS*

[Exemplo event emitter](2_eventEmitter.js)

### Benefícios
Resumindo, com callbacks podemos finalmente alcançar fluxos assíncronos. E por ser o método mais **simples
e natural**, tem mais **performance** que os próximos e não precisa de nenhuma biblioteca nem nada e é
totalmente **funcional em browsers** também.

### Problemas
Ok, mas como fica o uso de callbacks num cenário mais real?
Quando precisamos fazer N operações assíncronas encadeadas, ou seja, uma depende do
resultado da outra, corremos o risco de cair no que chamam de **callback hell** ou **pyramid of
doom**. É o aninhamento (nesting) de várias funções no melhor estilo Inception... E assim
como no filme, isso confunde muitas pessoas e o nosso código perde muito em legibilidade.

[Exemplo callback hell](3_callbackHell.js)

---

### [Avançar (2 - Promises)](../2_promises/README.md)
