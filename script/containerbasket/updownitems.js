
function increaseOrderBasket(ID, productType) {

    /* ---------- BURGER ---------- */

    if (productType === 'black-burger') {
        const check = document.getElementById('add-black-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-black-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            burger_sandwiches[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-burger-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'meat-burger') {
        const check = document.getElementById('add-meat-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-meat-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            burger_sandwiches[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-burger-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'red-burger') {
        const check = document.getElementById('add-red-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-red-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            burger_sandwiches[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-burger-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'chicken-burger') {
        const check = document.getElementById('add-chicken-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-chicken-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            burger_sandwiches[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-burger-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    /* ---------- PIZZA ---------- */

    else if (productType === 'margheritta-pizza') {
        const check = document.getElementById('add-margheritta-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-margheritta-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            pizza_30cm[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-pizza-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'chorizo-pizza') {
        const check = document.getElementById('add-chorizo-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-chorizo-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            pizza_30cm[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-pizza-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'funghi-pizza') {
        const check = document.getElementById('add-funghi-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-funghi-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            pizza_30cm[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-pizza-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'quattro-pizza') {
        const check = document.getElementById('add-quattro-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-quattro-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            pizza_30cm[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-pizza-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    /* ---------- SALAD ---------- */

    else if (productType === 'warm-salad') {
        const check = document.getElementById('add-warm-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-warm-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            Salad[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-salad-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'mini-salad') {
        const check = document.getElementById('add-mini-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-mini-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            Salad[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-salad-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'food-salad') {
        const check = document.getElementById('add-food-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-food-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            Salad[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-salad-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }

    else if (productType === 'tofu-salad') {
        const check = document.getElementById('add-tofu-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-tofu-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);
            amount = amount + 1;
            quantity_order.textContent = amount;
            Salad[ID].amount = amount;

            const total_order = document.getElementById("total-amount-order-salad-" + ID);
            if (total_order !== null) {
                total_order.textContent = amount;
            }
        }
    }



    const subtotal = subtotalGlobal();
    const total = totalGlobal();
    const subtotalFormate = formatPrice(subtotal);
    const totalFormate = formatPrice(total);


    const calculBasket = document.getElementById("calculation-basket");
    if (calculBasket !== null) {
        calculBasket.innerHTML = sumOrder(ID);
    }


    const subtotal_order = document.getElementById("amount-by-price-without-fee-" + ID);
    if (subtotal_order !== null) {
        subtotal_order.textContent = subtotalFormate;
    }

    const total_order = document.getElementById("amount-by-price-with-fee-" + ID);
    if (total_order !== null) {
        total_order.textContent = totalFormate;
    }

}

function decreaseOrdertoBasket(ID, productType) {

    /* ---------- BURGER ---------- */

    if (productType === 'black-burger') {
        const check = document.getElementById('remove-black-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-black-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                burger_sandwiches[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-burger-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'meat-burger') {
        const check = document.getElementById('remove-meat-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-meat-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                burger_sandwiches[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-burger-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'red-burger') {
        const check = document.getElementById('remove-red-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-red-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                burger_sandwiches[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-burger-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'chicken-burger') {
        const check = document.getElementById('remove-chicken-burger-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-chicken-burger-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                burger_sandwiches[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-burger-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    /* ---------- PIZZA ---------- */

    else if (productType === 'margheritta-pizza') {
        const check = document.getElementById('remove-margheritta-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-margheritta-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                pizza_30cm[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-pizza-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'chorizo-pizza') {
        const check = document.getElementById('remove-chorizo-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-chorizo-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                pizza_30cm[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-pizza-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'funghi-pizza') {
        const check = document.getElementById('remove-funghi-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-funghi-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                pizza_30cm[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-pizza-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'quattro-pizza') {
        const check = document.getElementById('remove-quattro-pizza-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-quattro-pizza-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                pizza_30cm[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-pizza-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    /* ---------- SALAD ---------- */

    else if (productType === 'warm-salad') {
        const check = document.getElementById('remove-warm-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-warm-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                Salad[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-salad-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'mini-salad') {
        const check = document.getElementById('remove-mini-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-mini-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                Salad[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-salad-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'food-salad') {
        const check = document.getElementById('remove-food-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-food-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                Salad[ID].amount = amount;

                const total_order = document.getElementById("total-amount-order-salad-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }

    else if (productType === 'tofu-salad') {
        const check = document.getElementById('remove-tofu-salad-' + ID);
        if (check !== null) {
            const quantity_order = document.getElementById("amount-tofu-salad-to-basket-" + ID);
            let amount = Number(quantity_order.textContent);

            if (amount > 0) {
                amount = amount - 1;
                quantity_order.textContent = amount;
                Salad[ID - 8].amount = amount;

                const total_order = document.getElementById("total-amount-order-salad-" + ID);
                if (total_order !== null) {
                    total_order.textContent = amount;
                }
            }

            if (amount === 0) {
                check.disabled = true;
            }
        }
    }



    const subtotal = subtotalGlobal();
    const total = totalGlobal();
    const subtotalFormate = formatPrice(subtotal);
    const totalFormate = formatPrice(total);

    const calculBasket = document.getElementById("calculation-basket");
    if (calculBasket !== null) {
        calculBasket.innerHTML = sumOrder(ID);
    }

    const subtotal_order = document.getElementById("amount-by-price-without-fee-" + ID);
    if (subtotal_order !== null) {
        subtotal_order.textContent = subtotalFormate;
    }

    const total_order = document.getElementById("amount-by-price-with-fee-" + ID);
    if (total_order !== null) {
        total_order.textContent = totalFormate;
    }
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