
let margheritta_amount = 1;
let chorizo_amount = 1;
let funghi_amount = 1;
let quattro_amount = 1;

function getOrderPizza(ID) {

    switch (ID) {
        case 0:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMagherittatoBasket(ID);

            margheritta_amount = 0;
            let margheritta_pizza = document.getElementById("amount-margheritta-pizza-to-basket-" + ID);
            margheritta_pizza.innerHTML = /*html*/ `
                     ${margheritta_amount} `;
            increaseOrderBasket(ID);
            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getChorizotoBasket(ID);
            chorizo_amount = 0;
            let chorizo_pizza = document.getElementById("amount-chorizo-pizza-to-basket-" + ID);
            chorizo_pizza.innerHTML = /*html*/ `
                     ${chorizo_amount} `;
            increaseOrderBasket(ID);
            break;
        case 2:

            document.getElementById('empty-basket-text-display').style.display = 'none';
            getFunghitoBasket(ID);
            funghi_amount = 0;
            let funghi_pizza = document.getElementById("amount-funghi-pizza-to-basket-" + ID);
            funghi_pizza.innerHTML = /*html*/ `
                     ${funghi_amount} `; increaseOrderBasket(ID); break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getQuattrotoBasket(ID);
            quattro_amount = 0;
            let quattro_pizza = document.getElementById("amount-quattro-pizza-to-basket-" + ID);
            quattro_pizza.innerHTML = /*html*/ `
                    ${quattro_amount} `; increaseOrderBasket(ID); break;
    }

}
