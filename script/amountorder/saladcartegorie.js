let warm_amount = 0;
let green_amount = 0;
let food_amount = 0;
let tofu_amount = 0;
function getOrderSalad(index) {

    switch (index) {
        case 0:
            warm_amount += 1;
            let warm_salad = document.getElementById("amount-order-salad-" + index);
            warm_salad.innerHTML = /*html*/ `
                     ${warm_amount} `; break;
        case 1:
            green_amount += 1;
            let green_salad = document.getElementById("amount-order-salad-" + index);
            green_salad.innerHTML = /*html*/ `
                     ${green_amount} `; break;
        case 2:
            food_amount += 1;
            let food_salad = document.getElementById("amount-order-salad-" + index);
            food_salad.innerHTML = /*html*/ `
                        ${food_amount} `; break;
        case 3:
            tofu_amount += 1;
            let tofu_salad = document.getElementById("amount-order-salad-" + index);
            tofu_salad.innerHTML = /*html*/ `
                     ${tofu_amount} `; break;
    }

}
