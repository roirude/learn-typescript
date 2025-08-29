type Pizza = {
    name: string,
    price: number
}


const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject);
}

function placeOrder(pizzaName: string) {
    const SelectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!SelectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += SelectedPizza.price;
    const newOrder = {
        id: nextOrderId++,
        pizza: SelectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);

    return newOrder;
}

function completeOrder(orderId: number) {
    const order = orderQueue.find((orderObj) => orderObj.id === orderId);
    order.status = "completed";

    return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
