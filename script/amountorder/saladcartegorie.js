let warm_amount = 0;
let green_amount = 0;
let food_amount = 0;
let tofu_amount = 0;
function getOrderSalad(index) {

    switch (index) {
        case 0:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getWarmBeefootBasket(index);
            warm_amount += 1;
            let warm_salad = document.getElementById("amount-order-salad-to-basket-" + index);
            warm_salad.innerHTML = /*html*/ `
                     ${warm_amount} `
            break;
        case 1:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getMiniGreentoBasket(index)
            green_amount += 1;
            let green_salad = document.getElementById("amount-order-salad-to-basket-" + index);
            green_salad.innerHTML = /*html*/ `
                     ${green_amount} `; break;
        case 2:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getSaladSeeFoodtoBasket(index)
            food_amount += 1;
            let food_salad = document.getElementById("amount-order-salad-to-basket-" + index);

            food_salad.innerHTML = /*html*/ `
                        ${food_amount} `; break;
        case 3:
            document.getElementById('empty-basket-text-display').style.display = 'none';
            getVeganSaladTofutoBasket(index)
            tofu_amount += 1;
            let tofu_salad = document.getElementById("amount-order-salad-to-basket-" + index);
            tofu_salad.innerHTML = /*html*/ `
                     ${tofu_amount} `; break;
    }

}
