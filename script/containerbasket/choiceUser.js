//getOrdertoBasket(arrDishes);


function getBurgertoBasket(ID) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const black_burger = document.getElementById("burger-basket-");
            black_burger.innerHTML = /*html*/ `
                    ${renderBackBurgerWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getMeatBurgertoBasket(ID) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const meat_burger = document.getElementById("meat-burger-basket-");
            meat_burger.innerHTML = /*html*/ `
                    ${renderMeatBurgerWarenkorb(elt, ID)}              
                    `;
        }

    }

}
function getRedBurgertoBasket(ID) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const red_burger = document.getElementById("red-burger-basket");
            red_burger.innerHTML = /*html*/ `
                    ${renderRedBurgerWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getBigChickenBurgertoBasket(ID) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const big_burger = document.getElementById("big-chicken-burger-basket");
            big_burger.innerHTML = /*html*/ `
                    ${renderBigChickenBurgerWarenkorb(elt, ID)}              
                    `;
        }

    }

}


/* Pizza */


function getMagherittatoBasket(ID) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const margheritta = document.getElementById("margheritta-basket");
            margheritta.innerHTML = /*html*/ `
                    ${renderMargherittaWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getChorizotoBasket(ID) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const chorizo = document.getElementById("chorizo-basket");
            chorizo.innerHTML = /*html*/ `
                    ${renderChorizoWarenkorb(elt, ID)}              
                    `;
        }

    }

}
function getFunghitoBasket(ID) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const funghi = document.getElementById("funghi-basket");
            funghi.innerHTML = /*html*/ `
                    ${renderFunghiWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getQuattrotoBasket(ID) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const quattro = document.getElementById("quattro-basket");
            quattro.innerHTML = /*html*/ `
                    ${renderQuattroWarenkorb(elt, ID)}              
                    `;
        }

    }

}


/* Salad */


function getWarmBeefootBasket(ID) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const warm = document.getElementById("warm-basket");
            warm.innerHTML = /*html*/ `
                    ${renderWarmBeeWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getMiniGreentoBasket(ID) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const chorizo = document.getElementById("mini-basket");
            chorizo.innerHTML = /*html*/ `
                    ${renderMiniGreenWarenkorb(elt, ID)}              
                    `;
        }

    }

}
function getSaladSeeFoodtoBasket(ID) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const funghi = document.getElementById("food-basket");
            funghi.innerHTML = /*html*/ `
                    ${renderSeeFoodWarenkorb(elt, ID)}              
                    `;
        }

    }

}

function getVeganSaladTofutoBasket(ID) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const quattro = document.getElementById("tofu-basket");
            quattro.innerHTML = /*html*/ `
                    ${renderVeganSaladTofu(elt, ID)}              
                    `;
        }

    }

}