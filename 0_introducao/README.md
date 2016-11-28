0 - INTRODUÇÃO

Para a maioria dos profissionais da área nos dias de hoje, ao dizer que um código é executado em
apenas uma thread pode parecer algo totalmente inviável, arcaico e sem escabilidade. Então como o
NodeJS conseguiu evoluir tanto e ganhar não só a confiança de grandes players do mercado, mas
também aplicabilidade em seus negócios?

Códigos que buscam dados de fontes externas podem demandar um tempo indeterminado. Para a aplicação
não ficar totalmente estática esperando, o NodeJS contorna isso executando parte desse código e
registrando um evento para o restante e segue o fluxo de execução. No momento em que a resposta é
recebida, o evento é disparado e aquele trecho é retomado para processamento.

Seguem algumas definições:
- Single-threaded: Todo o código é executado em uma única thread na plataforma;
- Non-blocking I/O: Processamento de input/output não bloqueia a execução dos programas;
- Event-driven: Código é executado de forma dinâmica através de eventos préviamente registrados;
- Event queue: Fila onde os trechos de código são registrados para serem executados;
- Event loop: Mecanismo que controla o ciclo de execução;
- OS thread pool: Agrupamento de threads de programas a serem executadas pelo SO;

![Fundamentos](images/fundamentals.jpg)

NodeJS APIs - métodos sync e async
- FS (readFile, writeFile, appendFile, etc);
- HTTP/NET (request, get, post, etc);
- etc;

(esquematização de requisição http, bonecos, ampulhetas, etc)
![Requisição HTTP](images/httpRequest.jpg)

Fluxo válido para uma consulta de registro no DB ou arquivo no filesystem, por exemplo.

X ... 500ms
X ......... 15000ms

Independente do tempo levado, você deixa a sua aplicação parada esperando o resultado da consulta?
NÃO! vamos usar a natureza assíncrona do NodeJS ao nosso favor para resolver isso!

[Voltar](README) [Avançar](1_callbacks/README)
