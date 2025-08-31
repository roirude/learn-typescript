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

let pizzaId: number = 1;

const menu: Pizza[] = [
    { id: pizzaId++, name: "Margherita", price: 8 },
    { id: pizzaId++, name: "Pepperoni", price: 10 },
    { id: pizzaId++, name: "Hawaiian", price: 10 },
    { id: pizzaId++, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Array<Order> = [];

export function addNewPizza(pizzaObject: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: pizzaId++,
        ...pizzaObject,
    };
    menu.push(newPizza);
    return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
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

/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

function addToArray<T>(array: T[], item: T) {
    array.push(item);
    return array;
}

// example usage:
addToArray(menu, { id: pizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, {
    id: nextOrderId++,
    pizza: menu[2],
    status: "completed",
});

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find((orderObj: Order) => orderObj.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the order queue.`);
        return;
    }
    order.status = "completed";

    return order;
}

function getPizzaDetail(identifier: number | string): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(
            (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
        );
    } else if (typeof identifier === "number") {
        return menu.find((pizza) => pizza.id === identifier);
    } else {
        throw new TypeError(
            "Parameter `Identfier` must be either a string or a number"
        );
    }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
