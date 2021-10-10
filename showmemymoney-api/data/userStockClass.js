const Stock = require('./stockClass');

module.exports = class UserStock {
    constructor(stock, quantity) {
        this.stock = new Stock(stock.name, stock.price);
        this.quantity = quantity;
    }
}