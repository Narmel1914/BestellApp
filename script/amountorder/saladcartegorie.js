let warm_amount = 1;
let green_amount = 1;
let food_amount = 1;
let tofu_amount = 1;
function getOrderSalad(ID) {

    switch (ID) {
        case 0:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getWarmBeefootBasket(ID);
            warm_amount = 0;
            let warm_salad = document.getElementById("amount-warm-salad-to-basket-" + ID);
            warm_salad.innerHTML = /*html*/ `
                     ${warm_amount} `;
            increaseOrderBasket(ID);
            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMiniGreentoBasket(ID)
            green_amount = 0;
            let green_salad = document.getElementById("amount-mini-salad-to-basket-" + ID);
            green_salad.innerHTML = /*html*/ `
                     ${green_amount} `; increaseOrderBasket(ID); break;
        case 2:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getSaladSeeFoodtoBasket(ID)
            food_amount = 0;
            let food_salad = document.getElementById("amount-food-salad-to-basket-" + ID);

            food_salad.innerHTML = /*html*/ `
                        ${food_amount} `; increaseOrderBasket(ID); break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getVeganSaladTofutoBasket(ID)
            tofu_amount = 0;
            let tofu_salad = document.getElementById("amount-tofu-salad-to-basket-" + ID);
            tofu_salad.innerHTML = /*html*/ `
                     ${tofu_amount} `; increaseOrderBasket(ID); break;
    }

}
