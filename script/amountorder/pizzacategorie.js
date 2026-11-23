
let margheritta_amount = 0;
let chorizo_amount = 0;
let funghi_amount = 0;
let quattro_amount = 0;
function getOrderPizza(index) {

    switch (index) {
        case 0:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMagherittatoBasket(index);
            margheritta_amount += 1;
            let margheritta_pizza = document.getElementById("amount-order-pizza-to-basket-" + index);
            margheritta_pizza.innerHTML = /*html*/ `
                     ${margheritta_amount} `;
            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getChorizotoBasket(index);
            chorizo_amount += 1;
            let chorizo_pizza = document.getElementById("amount-order-pizza-to-basket-" + index);
            chorizo_pizza.innerHTML = /*html*/ `
                     ${chorizo_amount} `; break;
        case 2:

            document.getElementById('empty-basket-text-display').style.display = 'none';
            getFunghitoBasket(index);
            funghi_amount += 1;
            let funghi_pizza = document.getElementById("amount-order-pizza-to-basket-" + index);
            funghi_pizza.innerHTML = /*html*/ `
                     ${funghi_amount} `; break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getQuattrotoBasket(index);
            quattro_amount += 1;
            let quattro_pizza = document.getElementById("amount-order-pizza-to-basket-" + index);
            quattro_pizza.innerHTML = /*html*/ `
                    ${quattro_amount} `; break;
    }

}
