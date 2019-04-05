import animal from './Animal';

console.log(animal);
console.log(animal.Cat);
let cat: animal.Cat = new animal.Cat(1, 1);
cat.say();
