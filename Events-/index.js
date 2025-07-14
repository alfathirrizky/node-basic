const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ billing }) => {
  console.log(`Tagihan untuk kopi ${billing} telah dibuat!`);
};

const onCoffeeOrder = ({ name, billing }) => {
    makeCoffee({ name });
    makeBill({ billing });
};

myEventEmitter.on("coffee-order", onCoffeeOrder);
myEventEmitter.emit("coffee-order", { name: "Tubruk", billing: 20000 });
