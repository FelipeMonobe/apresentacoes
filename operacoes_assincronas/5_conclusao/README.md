#5 - CONCLUSÃO

---

### [Voltar (4 - Async)](../4_async/README.md)

---
### Então...
Agora que aprendemos tudo isso, já podemos sair fazendo tudo assíncrono!!
Bom.. não é preciso se realmente não houver a necessidade disso.
Inclusive pode-se mesclar trechos assíncronos com síncronos. Mas
**PRESTE ATENÇÃO** ao fazer isso, garanta a ordem correta do fluxo caso precise
de algum tipo de precedência de dados ou processamento. Como no exemplo a seguir:

[Exemplo precedência](1_precedencia.js)

### Palavras finais
Portanto, podemos perceber que com o passar do tempo, foram-se encontrando novos meios de se
controlar os fluxos assíncronos, de callbacks para promises, generators e finalmente async/await.
É importante ressaltar que cada um desses adicionou um novo mecanismo/camada no processo para
facilitar a vida dos desenvolvedores. Cada estratégia é intercambiável, fazendo os devidos ajustes.

### Referências
- [The Hidden Power of ES6 Generators: Observable Async Flow Control - Eric Elliot](https://medium.com/javascript-scene/the-hidden-power-of-es6-generators-observable-async-flow-control-cfa4c7f31435#.g0gsq9hvp)
- [Node.js Succintly by Emanuele DelBono (SyncFusion)]
- [ES 5-6-7: From Callbacks to Promises to Generators to Async/await - RDX](https://medium.com/@rdsubhas/es6-from-callbacks-to-promises-to-generators-87f1c0cd8f2e#.wu8kwirqf)
- [Mozila Developer Network (Promises)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Mozila Developer Network (Generators)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [Node.green](http://node.green/)
