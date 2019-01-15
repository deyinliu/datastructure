const Queue = require("../structure/Queue.js").Queue;

class Pet {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
}

class Dog extends Pet {
    constructor() {
        super("dog");
    }
}
class Cat extends Pet {
    constructor() {
        super("cat");
    }
}

class PetEnterQueue {
    constructor(pet, count) {
        this.pet = pet;
        this.count = count;
    }
    getCount() {
        return this.count;
    }
    getPet() {
        return this.pet;
    }
    getPetType() {
        return this.pet.getType();
    }
}

class DogCatQueue {
    constructor() {
        this.dogQ = new Queue();
        this.catQ = new Queue();
        this.count = 0;
    }
    add(pet) {
        if (pet.getType() === "dog") {
            this.dogQ.enqueue(new PetEnterQueue(pet, this.count++));
        } else {
            if (pet.getType() === "cat") {
                this.catQ.enqueue(new PetEnterQueue(pet, this.count++));
            } else {
                throw new Error("no pet be added");
            }
        }
    }
    pollAll() {
        if (!this.catQ.isEmpty() && !this.dogQ.isEmpty()) {
            if (this.dogQ.front().getCount() < this.catQ.front().getCount()) {
                return this.dogQ.dequeue().getPetType();
            } else {
                return this.catQ.dequeue().getPetType();
            }
        }
        if (!this.catQ.isEmpty()) {
            return this.catQ.dequeue().getPetType();
        }
        if (!this.dogQ.isEmpty()) {
            return this.dogQ.dequeue().getPetType();
        }
        throw new Error("the pet queue is empty");
    }
    pollDog() {
        if (!this.dogQ.isEmpty()) {
            return this.dogQ.dequeue().getPetType();
        } else {
            throw new Error("the dog queue is empty");
        }
    }
    pollCat() {
        if (!this.catQ.isEmpty()) {
            return this.catQ.dequeue().getPetType();
        } else {
            throw new Error("the cat queue is empty");
        }
    }
    isEmpty() {
        return this.dogQ.isEmpty() && this.catQ.isEmpty();
    }
    isDogEmpty() {
        return this.dogQ.isEmpty();
    }
    isCatEmpty() {
        return this.catQ.isEmpty();
    }
}

const dogCat = new DogCatQueue();
dogCat.add(new Cat());
dogCat.add(new Cat());
dogCat.add(new Dog());
dogCat.add(new Cat());
dogCat.add(new Dog());
dogCat.add(new Dog());
console.log(dogCat.pollCat());
console.log(dogCat.pollAll());
while (!dogCat.isEmpty()) {
    console.log(dogCat.pollAll());
}