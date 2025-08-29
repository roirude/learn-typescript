const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];
const nextOrderId = 1;

function addNewPizza(pizzaObject) {
    menu.push(pizzaObject);
}

function placeOrder(pizzaName) {
    const SelectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    cashInRegister += SelectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: SelectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);

    return newOrder;
}

function completeOrder(orderId) {
    const order = orderQueue.find((orderObj) => orderObj.id === orderId);
    order.status = "completed";

    return order;
}


addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)