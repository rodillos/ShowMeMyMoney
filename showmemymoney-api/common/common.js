const fs = require('fs');
const UserStock = require('./userStockClass');
const Stock = require('./stockClass');

export function updateStock(stockName, stockValue, stockAction){
    let oldDataRaw = fs.readFileSync('../data/user-data.json');
    let oldData = JSON.parse(oldDataRaw);
    let oldValue = oldData.userStocks.find(userStock =>{
        userStock.stock.name == stockName;
    });

    let updatedValue = stockAction == 'add' ? oldValue.quantity + stockValue 
        : stockAction == 'substract' ? oldValue.quantity - stockValue 
        : oldValue.quantity; 

    let newData = oldData.userStocks.filter(userStock =>{
        userStock.stock.name != stockName;
    });

    newData.userStocks.concat({stock: oldValue.stock, quantity: updatedValue });
    const updatedUser = JSON.stringify(newData);
    fs.writeFileSync('../data/user-data.json', updatedUser);

}