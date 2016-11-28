const esperaDepoisCallback = (cb) => {
  console.log(`It's gonna be... wait for it...`);
  setTimeout(() => console.log('LEGENDARY!'), 3000);
};

esperaDepoisCallback(callback);
