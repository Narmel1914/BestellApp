//getOrdertoBasket(arrDishes);


function getBurgertoBasket(ID) {
    const basket = document.getElementById("black-burger-basket");
    if (basket === null) {
        console.log("black-burger-basket" + ID + "-Not exist");
        return;
    }
    for (let i = 0; i < burger_sandwiches.length; i++) {
        if (i === ID) {
            let black_burger = document.getElementById("add-black-burger-" + ID);
            if (black_burger !== null) {
                return;
            }
            basket.innerHTML += /*html*/   `
                ${renderBackBurgerWarenkorb(burger_sandwiches[i], ID)}              
                                `;
            break;
        }

    }
}

function getMeatBurgertoBasket(ID) {

    const basket = document.getElementById("meat-burger-basket");
    if (basket === null) {
        console.log("meat-burger-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < burger_sandwiches.length; i++) {
        if (i === ID) {
            const meat_burger = document.getElementById("add-meat-burger-" + ID);
            if (meat_burger !== null) return;

            basket.innerHTML += renderMeatBurgerWarenkorb(burger_sandwiches[i], ID);
            break;
        }
    }

}
function getRedBurgertoBasket(ID) {
    const basket = document.getElementById("red-burger-basket");
    if (basket === null) {
        console.log("red-burger-basket" + ID + "-Not exist");
        return;
    }
    for (let i = 0; i < burger_sandwiches.length; i++) {
        if (i === ID) {
            const red_burger = document.getElementById("add-red-burger-" + ID);
            if (red_burger !== null) return;

            basket.innerHTML += renderRedBurgerWarenkorb(burger_sandwiches[i], ID);
            break;
        }
    }


}

function getBigChickenBurgertoBasket(ID) {

    const basket = document.getElementById("big-chicken-burger-basket");
    if (basket === null) {
        console.log("big-burger-basket" + ID + "-Not exist");
        return;
    }
    for (let i = 0; i < burger_sandwiches.length; i++) {
        if (i === ID) {
            const red_burger = document.getElementById("add-chicken-burger-" + ID);
            if (red_burger !== null) return;

            basket.innerHTML += renderBigChickenBurgerWarenkorb(burger_sandwiches[i], ID);
            break;
        }
    }
}


/* Pizza */


function getMagherittatoBasket(ID) {

    const basket = document.getElementById("margheritta-basket");
    if (basket === null) {
        console.log("margheritta-basket" + ID + "-Not exist");
        return;
    }


    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const margheritta_pizza = document.getElementById("add-margheritta-pizza-" + ID);
            if (margheritta_pizza !== null) return;
            //pizza_30cm[i].amount = 1;
            basket.innerHTML += renderMargherittaWarenkorb(pizza_30cm[i], ID);
            break;
        }
    }

}

//getMagherittatoBasket(4);



function getChorizotoBasket(ID) {

    const basket = document.getElementById("chorizo-basket");
    if (basket === null) {
        console.log("chorizo-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const margheritta_pizza = document.getElementById("add-chorizo-pizza-" + ID);
            if (margheritta_pizza !== null) return;

            basket.innerHTML += renderChorizoWarenkorb(pizza_30cm[i], ID);
            break;
        }
    }

}
function getFunghitoBasket(ID) {

    const basket = document.getElementById("funghi-basket");
    if (basket === null) {
        console.log("funghi-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const funghi_pizza = document.getElementById("add-funghi-pizza-" + ID);
            if (funghi_pizza !== null) return;

            basket.innerHTML += renderFunghiWarenkorb(pizza_30cm[i], ID);
            break;
        }
    }



}

function getQuattrotoBasket(ID) {

    const basket = document.getElementById("quattro-basket");
    if (basket === null) {
        console.log("quattro-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const quattro_pizza = document.getElementById("add-quattro-pizza-" + ID);
            if (quattro_pizza !== null) return;

            basket.innerHTML += renderQuattroWarenkorb(pizza_30cm[i], ID);
            break;
        }

    }

}


/* Salad */


function getWarmBeefootBasket(ID) {
    const basket = document.getElementById("warm-basket");
    if (basket === null) {
        console.log("warm-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const warm_salad = document.getElementById("add-warm-salad-" + ID);
            if (warm_salad !== null) return;

            basket.innerHTML += renderWarmBeeWarenkorb(Salad[i], ID);
            break;
        }

    }

}

function getMiniGreentoBasket(ID) {

    const basket = document.getElementById("mini-basket");
    if (basket === null) {
        console.log("mini-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const mini_salad = document.getElementById("add-mini-salad-" + ID);
            if (mini_salad !== null) return;

            basket.innerHTML += renderMiniGreenWarenkorb(Salad[i], ID);
            break;
        }

    }

}


function getSaladSeeFoodtoBasket(ID) {

    const basket = document.getElementById("food-basket");
    if (basket === null) {
        console.log("food-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const food_salad = document.getElementById("add-food-salad-" + ID);
            if (food_salad !== null) return;

            basket.innerHTML += renderSeeFoodWarenkorb(Salad[i], ID);
            break;
        }

    }

}


function getVeganSaladTofutoBasket(ID) {

    const basket = document.getElementById("tofu-basket");
    if (basket === null) {
        console.log("tofu-basket" + ID + "-Not exist");
        return;
    }

    for (let i = 0; i < pizza_30cm.length; i++) {
        if (i === ID) {
            const tofu_salad = document.getElementById("add-tofu-salad-" + ID);
            if (tofu_salad !== null) return;

            basket.innerHTML += renderVeganSaladTofu(Salad[i], ID);
            break;
        }

    }

}


