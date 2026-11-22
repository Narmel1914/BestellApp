
let margheritta_amount = 0;
let chorizo_amount = 0;
let funghi_amount = 0;
let quattro_amount = 0;
function getOrderPizza(index) {

    switch (index) {
        case 0:
            margheritta_amount += 1;
            let margheritta_pizza = document.getElementById("amount-order-pizza-" + index);
            margheritta_pizza.innerHTML = /*html*/ `
                       Amount: ${margheritta_amount} `; break;
        case 1:
            chorizo_amount += 1;
            let chorizo_pizza = document.getElementById("amount-order-pizza-" + index);
            chorizo_pizza.innerHTML = /*html*/ `
                       Amount: ${chorizo_amount} `; break;
        case 2:
            funghi_amount += 1;
            let funghi_pizza = document.getElementById("amount-order-pizza-" + index);
            funghi_pizza.innerHTML = /*html*/ `
                       Amount: ${funghi_amount} `; break;
        case 3:
            quattro_amount += 1;
            let quattro_pizza = document.getElementById("amount-order-pizza-" + index);
            quattro_pizza.innerHTML = /*html*/ `
                       Amount: ${quattro_amount} `; break;
    }

}
