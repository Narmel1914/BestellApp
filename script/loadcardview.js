
creatCarviewBurger(arrDishes);


function creatCarviewBurger(obj) {
    for (let i = 0; i < obj.length - 2; i++) {
        let categorie = obj[i];
        for (let j = 0; j < categorie.length; j++) {
            const elt = categorie[j];
            const catalogue = document.getElementById("menu-burger");
            catalogue.innerHTML += /*html*/ `
                        ${renderBlackBurgerTemplate(elt)}
                        
            `;
        }
    }

}


creatCarviewPizza(arrDishes);


function creatCarviewPizza(obj) {
    for (let i = 1; i < obj.length - 1; i++) {
        let categorie = obj[i];
        for (let j = 0; j < categorie.length; j++) {
            const elt = categorie[j];
            const catalogue = document.getElementById("menu-pizza");
            catalogue.innerHTML += /*html*/ `
                       
                        ${renderPizzaTemplate(elt)}
                         
            `;
        }
    }

}


creatCarviewSalad(arrDishes);


function creatCarviewSalad(obj) {
    for (let i = 2; i < obj.length; i++) {
        let categorie = obj[i];
        for (let j = 0; j < categorie.length; j++) {
            const elt = categorie[j];
            const catalogue = document.getElementById("menu-salad");
            catalogue.innerHTML += /*html*/ `
                       
                        ${renderSaladTemplate(elt)}
                         
            `;
        }
    }

}

