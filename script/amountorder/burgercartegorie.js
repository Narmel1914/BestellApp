
let back_amount = 0;
let meat_amount = 0;
let beef_amount = 0;
let big_amount = 0;
function getOrderBurger(index) {

    switch (index) {
        case 0:
            back_amount += 1;
            let back_burger = document.getElementById("amount-order-burger-" + index);
            back_burger.innerHTML = /*html*/ `
                       Amount: ${back_amount} `; break;
        case 1:
            meat_amount += 1;
            let meat_burger = document.getElementById("amount-order-burger-" + index);
            meat_burger.innerHTML = /*html*/ `
                       Amount: ${meat_amount} `; break;
        case 2:
            beef_amount += 1;
            let beef_burger = document.getElementById("amount-order-burger-" + index);
            beef_burger.innerHTML = /*html*/ `
                       Amount: ${beef_amount} `; break;
        case 3:
            big_amount += 1;
            let big_burger = document.getElementById("amount-order-burger-" + index);
            big_burger.innerHTML = /*html*/ `
                       Amount: ${big_amount} `; break;
    }

}
