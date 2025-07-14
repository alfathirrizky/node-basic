const {EventEmitter} = require('events'); //Mengimpor modul events dari Node.js
const myEventEmitter = new EventEmitter(); //membuat instance EventEmitter

// Mendaftarkan listener untuk event 'birthday'
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

myEventEmitter.on('birthday', birthdayEventListener); //Mendaftarkan listener untuk event 'birthday'
myEventEmitter.emit('birthday', 'John Doe'); //Memicu event 'birthday' dan mengirimkan string 'John Doe' sebagai argumen ke listener
