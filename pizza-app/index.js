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

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
    const order = orderQueue.find((orderObj) => orderObj.id === orderId);
    order.status = "completed";

    return order;
}
