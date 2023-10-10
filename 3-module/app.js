/*const os = require('os');
const greeting = require('./greeting');

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));*/

const User = require('./user');

let daniil = new User('Daniil', 19);
daniil.sayHi();