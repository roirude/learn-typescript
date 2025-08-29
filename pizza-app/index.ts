type Pizza = {
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: string;
};

const menu: Pizza[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Array<Order> = [];

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
    const order = orderQueue.find((orderObj: Order) => orderObj.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the order queue.`);
        return;
    }
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
