//getOrdertoBasket(arrDishes);


function getBurgertoBasket(index) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const back_burger = document.getElementById("burger-basket");
            back_burger.innerHTML = /*html*/ `
                    ${renderBurgerWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getMeatBurgertoBasket(index) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const meat_burger = document.getElementById("meat-burger-basket");
            meat_burger.innerHTML = /*html*/ `
                    ${renderMeatBurgerWarenkorb(elt, index)}              
                    `;
        }

    }

}
function getRedBurgertoBasket(index) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const red_burger = document.getElementById("red-burger-basket");
            red_burger.innerHTML = /*html*/ `
                    ${renderRedBurgerWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getBigChickenBurgertoBasket(index) {

    for (let i = 0; i < arrDishes.length - 2; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const big_burger = document.getElementById("big-chicken-burger-basket");
            big_burger.innerHTML = /*html*/ `
                    ${renderBigChickenBurgerWarenkorb(elt, index)}              
                    `;
        }

    }

}


/* Pizza */


function getMagherittatoBasket(index) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const margheritta = document.getElementById("margheritta-basket");
            margheritta.innerHTML = /*html*/ `
                    ${renderMargherittaWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getChorizotoBasket(index) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const chorizo = document.getElementById("chorizo-basket");
            chorizo.innerHTML = /*html*/ `
                    ${renderChorizoWarenkorb(elt, index)}              
                    `;
        }

    }

}
function getFunghitoBasket(index) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const funghi = document.getElementById("funghi-basket");
            funghi.innerHTML = /*html*/ `
                    ${renderFunghiWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getQuattrotoBasket(index) {

    for (let i = 1; i < arrDishes.length - 1; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const quattro = document.getElementById("quattro-basket");
            quattro.innerHTML = /*html*/ `
                    ${renderQuattroWarenkorb(elt, index)}              
                    `;
        }

    }

}


/* Salad */


function getWarmBeefootBasket(index) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 0; j < categorie.length - 3; j++) {
            const elt = categorie[j];
            const warm = document.getElementById("warm-basket");
            warm.innerHTML = /*html*/ `
                    ${renderWarmBeeWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getMiniGreentoBasket(index) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 1; j < categorie.length - 2; j++) {
            const elt = categorie[j];
            const chorizo = document.getElementById("mini-basket");
            chorizo.innerHTML = /*html*/ `
                    ${renderMiniGreenWarenkorb(elt, index)}              
                    `;
        }

    }

}
function getSaladSeeFoodtoBasket(index) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 2; j < categorie.length - 1; j++) {
            const elt = categorie[j];
            const funghi = document.getElementById("food-basket");
            funghi.innerHTML = /*html*/ `
                    ${renderSeeFoodWarenkorb(elt, index)}              
                    `;
        }

    }

}

function getVeganSaladTofutoBasket(index) {

    for (let i = 2; i < arrDishes.length; i++) {
        let categorie = arrDishes[i];

        for (let j = 3; j < categorie.length; j++) {
            const elt = categorie[j];
            const quattro = document.getElementById("tofu-basket");
            quattro.innerHTML = /*html*/ `
                    ${renderVeganSaladTofu(elt, index)}              
                    `;
        }

    }

}