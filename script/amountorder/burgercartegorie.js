
let back_amount = 0;
let meat_amount = 0;
let beef_amount = 0;
let big_amount = 0;

let obj = arrDishes;

function getOrderBurger(index) {

    switch (index) {
        case 0:

            document.getElementById('empty-basket-text-display').style.display = 'none';
            getBurgertoBasket(index);
            back_amount += 1;
            //let back_burger = document.getElementById("amount-order-burger-" + index);
            let back_burger_to_Basket = document.getElementById("amount-order-burger-to-basket-" + index);
            //back_burger.innerHTML = /*html*/ `
            //           Amount: ${back_amount} `;
            back_burger_to_Basket.innerHTML = /*html*/ `
                       ${back_amount} `;

            //const btn_check = document.getElementById('btn-add-burger-' + index)

            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMeatBurgertoBasket(index);
            meat_amount += 1;
            //let meat_burger = document.getElementById("amount-order-burger-" + index);
            let meat_burger_to_basket = document.getElementById("amount-order-burger-to-basket-" + index);
            //meat_burger.innerHTML = /*html*/ `
            //           Amount: ${meat_amount} `; break;
            meat_burger_to_basket.innerHTML = /*html*/ `
                     ${meat_amount} `; break;
        case 2:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getRedBurgertoBasket(index);
            beef_amount += 1;
            //let beef_burger = document.getElementById("amount-order-burger-" + index);
            let beef_burger_to_basket = document.getElementById("amount-order-burger-to-basket-" + index);
            //beef_burger.innerHTML = /*html*/ `
            //           Amount: ${beef_amount} `; break;

            beef_burger_to_basket.innerHTML = /*html*/ `
                     ${beef_amount} `; break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getBigChickenBurgertoBasket(index);
            big_amount += 1;
            //let big_burger = document.getElementById("amount-order-burger-" + index);
            //big_burger.innerHTML = /*html*/ `
            //           Amount: ${big_amount} `; break;
            let big_burger_to_basket = document.getElementById("amount-order-burger-to-basket-" + index);
            big_burger_to_basket.innerHTML = /*html*/ `
                     ${big_amount} `; break;
    }

}
