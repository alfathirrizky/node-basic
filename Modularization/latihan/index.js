const Tiger = require("./tiger"); // TODO 3
const Wolf = require("./wolf"); // TODO 4

const fighting = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }

  if (wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }

  console.log("Tiger and Wolf have same strength");
};

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);