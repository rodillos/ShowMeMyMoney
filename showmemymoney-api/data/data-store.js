const Stock = require('./stockClass');
const UserStock = require('./userStockClass');
const User = require('./userClass');
const fs = require('fs');

const bonosA23 = new Stock('Bonos A23', 100);
const cocaCola = new Stock('Acciones Coca-Cola', 2000);
const bonosA42 = new Stock('Bonos A42', 42);
const apple = new Stock('Acciones Apple', 5000);

const stocks = [bonosA42, apple];

const user = new User(50000, [new UserStock(bonosA23, 3000), 
    new UserStock(cocaCola, 200)]);

const userJSON = JSON.stringify(user);
fs.writeFileSync('./data/user-data.json', userJSON);

const stocksJSON = JSON.stringify(stocks);
fs.writeFileSync('./data/stocks-data.json', stocksJSON);