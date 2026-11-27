


const DELIVERY_FEE = 4.99;

function getBurgerPrice(ID) {
    return burger_sandwiches[ID].price;
}

function getPizzaPrice(ID) {
    return pizza_30cm[ID].price;
}

function getSaladPrice(ID) {
    return Salad[ID].price;
}


function subtotalBurgers() {
    let total = 0;
    for (let i = 0; i < burger_sandwiches.length; i++) {
        total = total + (burger_sandwiches[i].price * burger_sandwiches[i].amount);
    }
    return total;
}

function subtotalPizzas() {
    let total = 0;
    for (let i = 0; i < pizza_30cm.length; i++) {
        total = total + (pizza_30cm[i].price * pizza_30cm[i].amount);
    }
    return total;
}

function subtotalSalads() {
    let total = 0;
    for (let i = 0; i < Salad.length; i++) {
        total = total + (Salad[i].price * Salad[i].amount);
    }
    return total;
}


function subtotalGlobal() {
    return subtotalBurgers() + subtotalPizzas() + subtotalSalads();
}

function totalGlobal() {
    const subtotal = subtotalGlobal();
    if (subtotal === 0) {
        return 0;
    }
    return subtotal + DELIVERY_FEE;
}

function formatPrice(number) {
    return number.toFixed(2).replace(".", ",") + " €";
}





/* 8  Erstelle eine Funktion für den Button Menü hinzufügen

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}*/
/*10  Erstelle eine Hilfsfunktion namens getMenuIndex

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}

function onAddMenu() {
    const menu = getMenuFromInput();
    const price = getPriceFromInput();

    if (menu === "" || price == "") return;   // not valid Entries

    const index = getMenuIndex(menu);

    if (index === -1) {
        menus.push(menu);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[index] += 1;   // Amount +1
    }

    console.log(menus, prices, amounts);
}*/
