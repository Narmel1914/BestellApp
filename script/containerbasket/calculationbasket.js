



function getValueFromBasket(ID) {
    return document.getElementById(ID).value;
}



function getAmountBurgerFromBasket(ID) { // total-amout-order-burger-  amount-order-burger-to-basket-
    let amount_burger_Basket = document.getElementById("total-amount-order-burger-" + ID);
    //console.log("amount:", amount_burger_Basket.textContent);
    const amount = Number(amount_burger_Basket.textContent);

    return amount;
}

function getAmountPizzaFromBasket(ID) { // total-amout-order-burger-  amount-order-burger-to-basket-
    let amount_pizza_Basket = document.getElementById("total-amount-order-pizza-" + ID);
    //console.log("amount:", amount_burger_Basket.textContent);
    const amount = Number(amount_pizza_Basket.textContent);
    return amount;
}
function getAmountSaladFromBasket(ID) { // total-amout-order-burger-  amount-order-burger-to-basket-
    let amount_salad_Basket = document.getElementById("total-amount-order-salad-" + ID);
    //console.log("amount:", amount_burger_Basket.textContent);
    const amount = Number(amount_salad_Basket.textContent);
    return amount;
}



function getPriceFromBasket(ID) {
    let price_burger = document.getElementById("price-" + ID);
    const price_with_Euro = price_burger.textContent;
    const price_clear = price_with_Euro.replace("€", "").trim();
    const replace_price_clear = Number(price_clear.replace(",", "."));

    return replace_price_clear; // parse float another variant of Number
}

function getPricePizzaFromBasket(ID) {
    let price_pizza = document.getElementById("pizza-price-" + ID);
    const price_with_Euro = price_pizza.textContent;
    const price_clear = price_with_Euro.replace("€", "").trim();
    const replace_price_clear = Number(price_clear.replace(",", "."));

    return replace_price_clear; // parse float another variant of Number
}


function getPriceSaladFromBasket(ID) {
    let price_pizza = document.getElementById("salad-price-" + ID);
    const price_with_Euro = price_pizza.textContent;
    const price_clear = price_with_Euro.replace("€", "").trim();
    const replace_price_clear = Number(price_clear.replace(",", "."));

    return replace_price_clear; // parse float another variant of Number
}




function SubtotalPricesBurgerBasket(ID) {

    //let bn_check = document.getElementById('add-burger-' + index);
    const amount = getAmountBurgerFromBasket(ID);
    const price = getPriceFromBasket(ID);
    const result = amount * price;

    return result;
}

function SubtotalPricesPizzaBasket(ID) {

    //let bn_check = document.getElementById('add-burger-' + index);
    const amount = getAmountPizzaFromBasket(ID);
    const price = getPricePizzaFromBasket(ID);
    const result = amount * price;

    return result;
}


function SubtotalPricesSaladBasket(ID) {

    //let bn_check = document.getElementById('add-burger-' + index);
    const amount = getAmountSaladFromBasket(ID);
    const price = getPriceSaladFromBasket(ID);
    const result = amount * price;

    return result;
}



function ToatalPricesBurgerBasket(ID) {
    //const AmountBurgerIncrease = getAmountBurgerIncreaseFromBasket(ID)

    let deliveryfee = "4,99€".replace("€", "").trim();
    const deliveryfee_without_Euro = Number(deliveryfee.replace(",", "."));
    deliveryfee = deliveryfee_without_Euro;
    const total = SubtotalPricesBurgerBasket(ID) + deliveryfee;
    return total;
}

function ToatalPricesPizzaBasket(ID) {
    //const AmountBurgerIncrease = getAmountBurgerIncreaseFromBasket(ID)

    let deliveryfee = "4,99€".replace("€", "").trim();
    const deliveryfee_without_Euro = Number(deliveryfee.replace(",", "."));
    deliveryfee = deliveryfee_without_Euro;
    const total = SubtotalPricesPizzaBasket(ID) + deliveryfee;
    return total;
}


function ToatalPricesSaladBasket(ID) {
    //const AmountBurgerIncrease = getAmountBurgerIncreaseFromBasket(ID)

    let deliveryfee = "4,99€".replace("€", "").trim();
    const deliveryfee_without_Euro = Number(deliveryfee.replace(",", "."));
    deliveryfee = deliveryfee_without_Euro;
    const total = SubtotalPricesSaladBasket(ID) + deliveryfee;
    return total;
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
