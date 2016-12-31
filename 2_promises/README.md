#2 - PROMISES

Tendo em vista as complicações do encadeamento de callbacks e error handling, surgiu uma
nova solução. As promises. Elas são como tokens. Quando as usamos, o código executa um tipo
de função chamada executor, que recebe argumentos resolve e reject. O executor requisita o
dado externo, e te retorna o token (promise pendente). Quando a requisição é completada e o
executor resolvido (promise cumprida), o token é substituído pelo valor real do dado
externo. Se o executor for rejeitado (promise rejeitada), no valor é recebido o erro.

![Fundamentos](../images/2_promises_1.png)

Inicialmente para usar promises era preciso adicionar bibliotecas como o *Q* ou o
*Bluebird*, mas com a chegada do ES2015, o Javascript ganhou sua implementação nativa de
Promises. É muito debatido se ainda compensa usar essas bibliotecas. Há benchmarks que
apontam melhor performance e menor custo com o uso do *Bluebird* comparado ao nativo, além
de ter mais funcionalidades.

Uma promise conta com os seguinte métodos:
- then(fn): encadeia uma função que recebe como argumento o valor resolvido da promise do
contexto;
- catch(fn): como em um try-catch convencional, podemos tratar o erro de uma série de
promises encadeadas de forma centralizada;
- race(iterable): recebe um grupo de promises, executa-as em paralelo e retorna uma nova
promise central. A primeira do grupo a se resolver, retorna o seu valor na centralizada e
cancela as outras;
- all(iterable): parecido com o race, mas a promise central se resolve apenas quando todas
as outras também tiverem. A promise central recebe um array com os valores retornados;
- resolve(any): resolve uma promise retornando qualquer valor como tipo;
- reject(string): rejeita uma promise retornando o motivo do erro;

A capacidade das promises serem encadeadas adicionando novas funções com o *then* resolveu o
problema anterior dos callbacks, trazendo muito mais organização. Como visto a seguir.

[Exemplo promise](1_promise.js)<br>
[Exemplo catch](2_catch.js)<br>
[Exemplo all](3_all.js)<br>

** Algumas bibliotecas disponibilizam uma função que transforma callbacks das APIs
assíncronas do NodeJS em promises.

O problema com as promises é causado por duas mecânicas: escopo de funções e os próprios
callbacks passados como argumento dos métodos then. Imagine que precisamos executar uma
série de funções encadeadas mas que cada função depende do retorno da promise anterior.
Até então, este é o cenário ideal. Porém, e se precisássemos carregar valores de outras
funções que não as diretamente anteriores? Por causa do escopo das funções, os callbacks só
terão acesso aos seus argumentos. O Promise.all não serve pois executa em paralelo. Seguem
algumas soluções não elegantes ao problema:

[Exemplo global](4_global.js)
[Exemplo bind](5_bind.js)
