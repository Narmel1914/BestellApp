

function increaseOrderBasket(ID) {

    const calcul_basket = document.getElementById("calculation-basket");

    calcul_basket.innerHTML = `${sumOrder(ID)}`;

    const check_black_burger = document.getElementById('add-black-burger-' + ID)
    if (check_black_burger !== null) {
        let black_burger = document.getElementById("amount-black-burger-to-basket-" + ID);
        let amount = Number(black_burger.textContent);
        amount += 1;
        black_burger.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);

        amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPriceFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("black-burger-increase ", calculation);

    };

    const check_meat_burger = document.getElementById('add-meat-burger-' + ID)
    if (check_meat_burger !== null) {
        let meat_burger = document.getElementById("amount-meat-burger-to-basket-" + ID);
        let amount = Number(meat_burger.textContent);
        amount += 1;

        meat_burger.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);

        amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;
        const price = getPriceFromBasket(ID);
        const result = amount * price;
        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("meat-burger-increase ", calculation);

    };

    const check_red_burger = document.getElementById('add-red-burger-' + ID)
    if (check_red_burger !== null) {
        let red_burger = document.getElementById("amount-red-burger-to-basket-" + ID);
        let amount = Number(red_burger.textContent);
        amount += 1;

        red_burger.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);

        amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;
        const price = getPriceFromBasket(ID);
        const result = amount * price;
        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("red-burger-increase ", calculation);

    };

    const check_chicken_burger = document.getElementById('add-chicken-burger-' + ID)
    if (check_chicken_burger !== null) {
        let chicken_burger = document.getElementById("amount-chicken-burger-to-basket-" + ID);
        let amount = Number(chicken_burger.textContent);
        amount += 1;

        chicken_burger.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);

        amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;
        const price = getPriceFromBasket(ID);
        const result = amount * price;
        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("chicken-burger-increase ", calculation);

    };

    /*Pizza*/


    const check_margheritta_pizza = document.getElementById('add-margheritta-pizza-' + ID)
    if (check_margheritta_pizza !== null) {
        let margheritta_pizza = document.getElementById("amount-margheritta-pizza-to-basket-" + ID);
        let amount = Number(margheritta_pizza.textContent);
        amount += 1;
        margheritta_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);

        amount_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPricePizzaFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("magheritta-pizza-increase ", calculation);

    };


    const check_chorizo_pizza = document.getElementById('add-chorizo-pizza-' + ID)
    if (check_chorizo_pizza !== null) {
        let chorizo_pizza = document.getElementById("amount-chorizo-pizza-to-basket-" + ID);
        let amount = Number(chorizo_pizza.textContent);
        amount += 1;
        chorizo_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);

        amount_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPricePizzaFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("chorizo-pizza-increase ", calculation);

    };

    const check_funghi_pizza = document.getElementById('add-funghi-pizza-' + ID)
    if (check_funghi_pizza !== null) {
        let funghi_pizza = document.getElementById("amount-funghi-pizza-to-basket-" + ID);
        let amount = Number(funghi_pizza.textContent);
        amount += 1;
        funghi_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);

        amount_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPricePizzaFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("funghi_pizza-increase ", calculation);

    };
    const check_quattro_pizza = document.getElementById('add-quattro-pizza-' + ID)
    if (check_quattro_pizza !== null) {
        let quattro_pizza = document.getElementById("amount-quattro-pizza-to-basket-" + ID);
        let amount = Number(quattro_pizza.textContent);
        amount += 1;
        quattro_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);

        amount_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPricePizzaFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("quattro_pizza-increase ", calculation);

    };

    /*Salad*/
    const check_warme_pizza = document.getElementById('add-warm-salad-' + ID)
    if (check_warme_pizza !== null) {
        let warm_pizza = document.getElementById("amount-warm-salad-to-basket-" + ID);
        let amount = Number(warm_pizza.textContent);
        amount += 1;
        warm_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_warm_to_Basket = document.getElementById("total-amount-order-salad-" + ID);

        amount_warm_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPriceSaladFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("warm_pizza-increase ", calculation);

    };

    const check_mini_green_pizza = document.getElementById('add-mini-salad-' + ID)
    if (check_mini_green_pizza !== null) {
        let mini_green_pizza = document.getElementById("amount-mini-salad-to-basket-" + ID);
        let amount = Number(mini_green_pizza.textContent);
        amount += 1;
        mini_green_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_mini_green_to_Basket = document.getElementById("total-amount-order-salad-" + ID);

        amount_mini_green_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPriceSaladFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("mini_green_pizza-increase ", calculation);

    };


    const check_food_pizza = document.getElementById('add-food-salad-' + ID)
    if (check_food_pizza !== null) {
        let food_pizza = document.getElementById("amount-food-salad-to-basket-" + ID);
        let amount = Number(food_pizza.textContent);
        amount += 1;
        food_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_food_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);

        amount_food_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPriceSaladFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("food_pizza-increase ", calculation);

    };
    const check_tofu_pizza = document.getElementById('add-tofu-salad-' + ID)
    if (check_tofu_pizza !== null) {
        let tofu_pizza = document.getElementById("amount-tofu-salad-to-basket-" + ID);
        let amount = Number(tofu_pizza.textContent);
        amount += 1;
        tofu_pizza.innerHTML = /*html*/ `
                       ${amount} `;

        let amount_tofu_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);

        amount_tofu_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount} `;

        const price = getPriceSaladFromBasket(ID);
        const result = amount * price;

        let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
        subtotal.innerHTML += `${result}`;

        const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
        let total = document.getElementById("amount-by-price-with-fee-" + ID)
        total.innerHTML = `${calculation}€`;

        localStorage.setItem("tofu_pizza-increase ", calculation);

    };



}


function decreaseOrdertoBasket(ID) {

    let amount_decrease;
    const calcul_basket = document.getElementById("calculation-basket");
    calcul_basket.innerHTML = `${sumOrder(ID)}`;

    let btn_remove_desabled = document.getElementById("remove-black-burger-" + ID)
    const check_black_burger = document.getElementById('remove-black-burger-' + ID);

    if (check_black_burger !== null) {
        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);
        let black_burger = document.getElementById("amount-black-burger-to-basket-" + ID);

        let amount = Number(amount_burger_to_Basket.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            black_burger.innerHTML = `${amount_decrease}`
            amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("black-burger-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }
    };

    const check_meat_burger = document.getElementById('remove-meat-burger-' + ID);

    if (check_meat_burger !== null) {
        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);
        let meat_burger = document.getElementById("amount-meat-burger-to-basket-" + ID);

        let amount = Number(amount_burger_to_Basket.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            meat_burger.innerHTML = `${amount_decrease}`
            amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("meat-burger-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }


    };

    const check_red_burger = document.getElementById('remove-red-burger-' + ID);

    if (check_red_burger !== null) {
        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);
        let red_burger = document.getElementById("amount-red-burger-to-basket-" + ID);

        let amount = Number(amount_burger_to_Basket.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            red_burger.innerHTML = `${amount_decrease}`
            amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("red-burger-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }

    };

    const check_chicken_burger = document.getElementById('remove-chicken-burger-' + ID);

    if (check_chicken_burger !== null) {
        let amount_burger_to_Basket = document.getElementById("total-amount-order-burger-" + ID);
        let chicken_burger = document.getElementById("amount-chicken-burger-to-basket-" + ID);

        let amount = Number(amount_burger_to_Basket.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            chicken_burger.innerHTML = `${amount_decrease}`
            amount_burger_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesBurgerBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("chicken-burger-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }

    };

    /*Pizza*/

    const check_margheritta_pizza = document.getElementById('remove-margheritta-pizza-' + ID);

    if (check_margheritta_pizza !== null) {
        let amount_margheritta_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);
        let margheritta_pizza = document.getElementById("amount-margheritta-pizza-to-basket-" + ID);

        let amount = Number(margheritta_pizza.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            margheritta_pizza.innerHTML = `${amount_decrease}`
            amount_margheritta_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPricePizzaFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("margheritta-pizza-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }


    };

    const check_chorizo_pizza = document.getElementById('remove-chorizo-pizza-' + ID);

    if (check_chorizo_pizza !== null) {
        let amount_chorizo_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);
        let chorizo_pizza = document.getElementById("amount-chorizo-pizza-to-basket-" + ID);

        let amount = Number(chorizo_pizza.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            chorizo_pizza.innerHTML = `${amount_decrease}`
            amount_chorizo_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPricePizzaFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("chorizo-pizza-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }


    };

    const check_funghi_pizza = document.getElementById('remove-funghi-pizza-' + ID);

    if (check_funghi_pizza !== null) {
        let amount_funghi_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);
        let funghi_pizza = document.getElementById("amount-funghi-pizza-to-basket-" + ID);

        let amount = Number(funghi_pizza.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            funghi_pizza.innerHTML = `${amount_decrease}`
            amount_funghi_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPricePizzaFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("funghi-pizza-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }


    };

    const check_quattro_pizza = document.getElementById('remove-quattro-pizza-' + ID);

    if (check_quattro_pizza !== null) {
        let amount_quattro_pizza_to_Basket = document.getElementById("total-amount-order-pizza-" + ID);
        let quattro_pizza = document.getElementById("amount-quattro-pizza-to-basket-" + ID);

        let amount = Number(quattro_pizza.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            quattro_pizza.innerHTML = `${amount_decrease}`
            amount_quattro_pizza_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPricePizzaFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesPizzaBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("quattro-pizza-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }


    };

    /*Salad*/


    const check_warm_salad = document.getElementById('remove-warm-salad-' + ID);

    if (check_warm_salad !== null) {
        let amount_warm_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);
        let warm_salad = document.getElementById("amount-warm-salad-to-basket-" + ID);

        let amount = Number(warm_salad.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            warm_salad.innerHTML = `${amount_decrease}`
            amount_warm_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceSaladFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("warm-salad-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }
    };

    const check_mini_green_salad = document.getElementById('remove-mini-salad-' + ID);

    if (check_mini_green_salad !== null) {
        let amount_mini_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);
        let mini_salad = document.getElementById("amount-mini-salad-to-basket-" + ID);

        let amount = Number(mini_salad.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            mini_salad.innerHTML = `${amount_decrease}`
            amount_mini_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceSaladFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("mini-green-salad-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }
    };


    const check_food_salad = document.getElementById('remove-food-salad-' + ID);

    if (check_food_salad !== null) {
        let amount_food_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);
        let food_salad = document.getElementById("amount-food-salad-to-basket-" + ID);

        let amount = Number(food_salad.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            food_salad.innerHTML = `${amount_decrease}`
            amount_food_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceSaladFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("food-salad-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }
    };

    const check_tofu_salad = document.getElementById('remove-tofu-salad-' + ID);

    if (check_tofu_salad !== null) {
        let amount_tofu_salad_to_Basket = document.getElementById("total-amount-order-salad-" + ID);
        let tofu_salad = document.getElementById("amount-tofu-salad-to-basket-" + ID);

        let amount = Number(tofu_salad.textContent);
        amount_decrease = amount - 1;

        if (amount_decrease >= 0) {
            tofu_salad.innerHTML = `${amount_decrease}`
            amount_tofu_salad_to_Basket.innerHTML = /*html*/ `
                       ${amount_decrease} `;

            const price = getPriceSaladFromBasket(ID);
            const result = amount_decrease * price;


            let subtotal = document.getElementById("amount-by-price-without-fee-" + ID);
            subtotal.innerHTML += `${result}`;

            const calculation = String(ToatalPricesSaladBasket(ID)).replace(".", ",");
            let total = document.getElementById("amount-by-price-with-fee-" + ID)
            total.innerHTML = `${calculation}€`;
            localStorage.setItem("tofu-salad-decrease ", calculation);
        }

        if (amount_decrease === -1) {
            btn_remove_desabled.disabled = true;
        }
    };


}
/*
function SubtotalPricesBurgerBasket(ID) {

    //let bn_check = document.getElementById('add-burger-' + index);
    const amount = decreaseOrdertoBasket(ID);
    console.log("Res2:", amount);
    const price = getPriceFromBasket(ID);
    const result = amount * price;
    console.log(result)
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

/*
    let price = getPriceFromBasket(ID);
    let amount_price = amount * price
    let deliveryfee = "4,99€".replace("€", "").trim();
    const deliveryfee_without_Euro = Number(deliveryfee.replace(",", "."));
    deliveryfee = deliveryfee_without_Euro;
    const total = SubtotalPricesBurgerBasket(ID) + deliveryfee;
*/