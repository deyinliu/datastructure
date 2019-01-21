const Train = require("../structure/Train").Train;

let train = new Train(1);
train.add();
train.add();
train.add();
train.add();
train.add();
train.add();
console.log(train.toString());
train.buyTicket(1, 4);
train.buyTicket(1, 4);
console.log(train.toString());