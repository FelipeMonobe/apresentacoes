NodeJS e operações assíncronas

Definições:
- Single-threaded: Todo o código é executado em uma única thread na plataforma;
- Non-blocking I/O: Em compensação, o processamento de input/output não bloqueia a sequência de
execução dos programas;
- Event-driven: Através de emissão de eventos, a plataforma é capaz de executar códigos
préviamente "registrados";
- Event queue: Fila onde os trechos de código são registrados para serem executados;
- Event loop: Mecanismo que controla o ciclo de execução;
- OS thread pool: ;

Mas o que tudo isso quer dizer?
Para a maioria dos profissionais da área nos dias de hoje, dizer que o código de uma plataforma
é executada em apenas uma thread pode parecer algo totalmente inviável, arcaico e sem escabilidade.
Então como o NodeJS conseguiu evoluir tanto e ganhar não só a confiança de grandes players do
mercado, mas também aplicabilidade em seus negócios?
Códigos que buscam dados de fontes externas podem demandar tempo indeterminado. Para contornar
essas questões de performance, o NodeJS executa parte desse código e registra um evento para o
restante e segue o fluxo de execução. No momento que a resposta é obtida, o evento é disparado e
aquele trecho é retomado.

NodeJS APIs - métodos sync e async
- FS;
- HTTP/NET;
- etc;

(esquematização de requisição http, bonecos, ampulhetas, etc)

A assincronidade da plataforma pode ser alcançada através de uma das seguintes formas:
1) Callbacks;
2) Promises;
3) Generators e iterators;
4) Async e await;

1. Callbacks
(histórico do callback, AJAX)
(exemplo com EventEmitter)
(callback hell)

2. Promises
(ES2015, métodos)
(Promise chain)
(libs e nativo)
(exemplo com Promises)
