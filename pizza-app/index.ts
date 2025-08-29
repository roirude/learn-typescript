type Pizza = {
    id: number;
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: "ordered" | "completed";
};

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
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
    const newOrder: Order = {
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

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
