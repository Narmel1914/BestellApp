
creatCarviewBurger(arrDishes);


function creatCarviewBurger(obj) {
    for (let i = 0; i < obj.length - 2; i++) {
        let burger_categorie = obj[i];
        for (let j = 0; j < burger_categorie.length; j++) {
            const elt = burger_categorie[j];
            const burger_catalogue = document.getElementById("menu-burger");
            burger_catalogue.innerHTML += /*html*/ `
                        ${renderBurgerTemplate(elt, j)}
                        
            `;

        }
    }

}


creatCarviewPizza(arrDishes);


function creatCarviewPizza(obj) {
    for (let i = 1; i < obj.length - 1; i++) {
        let pizza_categorie = obj[i];
        for (let j = 0; j < pizza_categorie.length; j++) {
            const elt = pizza_categorie[j];
            const pizza_catalogue = document.getElementById("menu-pizza");
            pizza_catalogue.innerHTML += /*html*/ `
                       
                        ${renderPizzaTemplate(elt, j)}
                         
            `;
        }
    }

}


creatCarviewSalad(arrDishes);


function creatCarviewSalad(obj) {
    for (let i = 2; i < obj.length; i++) {
        let salad_categorie = obj[i];
        for (let j = 0; j < salad_categorie.length; j++) {
            const elt = salad_categorie[j];
            const salad_catalogue = document.getElementById("menu-salad");
            salad_catalogue.innerHTML += /*html*/ `
                       
                        ${renderSaladTemplate(elt, j)}
                         
            `;
        }
    }

}

