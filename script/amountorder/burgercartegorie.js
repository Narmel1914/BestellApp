
let black_amount = 1;
let meat_amount = 1;
let beef_amount = 1;
let big_amount = 1;

let obj = arrDishes;

/* button onclick from cardviewtemplate*/
function getOrderBurger(ID) {


    switch (ID) {
        case 0:

            document.getElementById('empty-basket-text-display').style.display = 'none';
            getBurgertoBasket(ID);
            black_amount = 0;
            let black_burger_to_Basket = document.getElementById("amount-black-burger-to-basket-" + ID);
            black_burger_to_Basket.innerHTML =
             /*html*/ `${black_amount}`;
            increaseOrderBasket(ID);
            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMeatBurgertoBasket(ID);
            meat_amount = 0;
            let meat_burger_to_basket = document.getElementById("amount-meat-burger-to-basket-" + ID);
            meat_burger_to_basket.innerHTML = /*html*/ `
                     ${meat_amount} `;
            increaseOrderBasket(ID);
            break;
        case 2:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getRedBurgertoBasket(ID);
            beef_amount = 0;

            let beef_burger_to_basket = document.getElementById("amount-red-burger-to-basket-" + ID);
            beef_burger_to_basket.innerHTML = /*html*/ `
                     ${beef_amount} `;
            increaseOrderBasket(ID);
            break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getBigChickenBurgertoBasket(ID);
            big_amount = 0;
            ;
            let big_burger_to_basket = document.getElementById("amount-chicken-burger-to-basket-" + ID);
            big_burger_to_basket.innerHTML = /*html*/ `
                     ${big_amount} `; increaseOrderBasket(ID); break;
    }

}
