const { forEach, includes } = require('lodash');
const { parse } = require('path');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventory = new Map();
function askCommand() {
    console.log('Welcome to inventory management system!')
    console.log('Available command: add, remove, search, update, summary, exit');
    rl.question('\Enter a command: ', function (command) {
        switch (command.trim().toLowerCase()) {
            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Invalid command: enter a valid choice! ')
                askCommand();

        }
    });
}


// Add items
function addItemPrompt() {
    rl.question('Enter the item id: ', function (id) {
        rl.question('Enter the item name: ', function (name) {
            rl.question('Enter item category: ', function (category) {
                rl.question('Enter item quantity: ', function (quantity) {
                    addItem(id, name, category, parseInt(quantity));
                    askCommand();
                })
            })
        })
    })

}

function addItem(id, name, category, quantity) {
    if (inventory.has(id)) {
        console.log(`Error item with id ${id} already exists`);
    } else {
        inventory.set(id, { name, category, quantity });
        console.log(`Item with ID ${id} added to inventory!`);
    }
}

// remove item

function removeItemPrompt() {
    rl.question('Enter the id : ', function (id) {
        removeItem(id);
        askCommand()
    })
}

function removeItem(id) {
    if (inventory.has(id)) {
        inventory.delete(id);
        console.log(`Item with ID ${id} removed!`);
    } else {
        console.log(`${id} is not found!`);
    }

}

// serach item

function searchItemPrompt() {
    rl.question('Enter the search item:', function (searchTerm) {
        searchItem(searchTerm)
        askCommand()
    });
}

function searchItem(searchTerm) {
    const results = [];
    for (const [id, item] of inventory) {
        if (id.includes(searchTerm) || item.name.includes(searchTerm) || item.category.includes(searchTerm) || item.quantity.includes(searchTerm)) {
            results.push({ id, ...item }) //using spread operator to get the all items {id,...item}

        }
    }

    if (results.length > 0) {
        console.log(`Search Results: `, results);
    } else {
        console.log('No item found')
    }
}

// update item

function updateItemPrompt() {
    rl.question('Enter the item id: ', function (id) {
        rl.question('Enter the item name: ', function (newName) {
            rl.question('Enter item category: ', function (newCategory) {
                rl.question('Enter item quantity: ', function (newQuantity) {
                    updateItem(id, newName, newCategory, newQuantity ? parseInt(newQuantity) : undefined);
                    askCommand();
                })
            })
        })
    })
}

function updateItem(id, newName, newCategory, newQuantity) {
    if (inventory.has(id)) {
        const item = inventory.get(id);
        item.name = newName || item.name;
        item.category = newCategory || item.category
        item.quantity = newQuantity !== undefined ? newQuantity : item.quantity
        inventory.set(id, item);
        console.log(`Item with ID ${id} updated!`)
    } else {
        console.log(`Item with ID ${id} not found!`)
    }
}

// summary

function printSummary() {
    if (inventory.size > 0) {
        console.log('Inventory summary : ')
        for (const [id, item] of inventory) {
            console.log(`ID : ${id}  Name : ${item.name}  Category : ${item.category}  Quantity : ${item.quantity}`)
        }
    } else {
        console.log('No items found!')
    }
}

askCommand();