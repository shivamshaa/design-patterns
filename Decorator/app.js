import Coffee from './coffee.js';
import Milk from './milkDecorator.js';
import Sugar from './sugarDecorator.js';

let myCoffee = new Coffee();
console.log(myCoffee.cost()); // Output: 5

myCoffee = new Milk(myCoffee);
console.log(myCoffee.cost()); // Output: 7

myCoffee = new Sugar(myCoffee);
console.log(myCoffee.cost()); // Output: 8