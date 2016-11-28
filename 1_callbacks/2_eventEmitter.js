const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

let counter = 0;

setInterval(() => {
  counter++;
  if (counter % 3 === 0) emitter.emit('meuEvento', counter);
}, 1000);

emitter.on('meuEvento', (input) => console.log(`Counter está em ${input}`));
