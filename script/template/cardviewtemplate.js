function renderBlackBurgerTemplate(ArrObj, index) {
    return /*html*/ `
        <div class="single-menu-burger"> 
            <div id="show-img-choice-${index}" class="img-order">
                <img src="${ArrObj.image}" alt="burger">
                  </div>
            <div class="title-content-burger">
                <h4 id="name-burger"> ${ArrObj.name}</h4>
                <h6 id="burger-description">${ArrObj.description}</h6>

                <div id="amount-order-burger-${index}" class="amount-burger"> ${ArrObj.amount}</div>
            </div>
          
            <div class="price-addOrder">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrderBurger(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div>
            </div> 
        </div>
    `;
}

function renderPizzaTemplate(ArrObj, index) {
    return /*html*/ `
        <div class="single-menu-pizza"> 
            <div id="show-img-choice-${index}" class="img-order">
                <img src="${ArrObj.image}" alt="pizza">
            </div>
            <div class="title-content-pizza">
                <h4 id="name-pizza"> ${ArrObj.name}</h4>
                <h6 id="pizza-description">${ArrObj.description}</h6>
                <div id="amount-order-pizza-${index}" class="amount-pizza"> ${ArrObj.amount}</div>
            </div>
             
            <div class="price-addOrder">
                <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <div class="add-choice">
                    <button  id="btn-add-pizza-${index}" type="button"  class="btn-icon btn-lg rounded-pill" aria-label="Add pizza" onclick="getOrderPizza( ${index})">
                        <i class="bi bi-plus-lg" aria-hidden="true"></i>
                    </button>
                </div>
            </div> 
        </div>
    `;
}

function renderSaladTemplate(ArrObj, index) {
    return /*html*/ `
        <div class="single-menu-salad"> 
            <div id="show-img-choice-${index}" class="img-order">
                <img src="${ArrObj.image}" alt="salad">
            </div>
            <div class="title-content-salad">
                <h4 id="name-salad"> ${ArrObj.name}</h4>
                <h6 id="salad-description">${ArrObj.description}</h6>
                <div id="amount-order-salad-${index}" class="amount-salad">${ArrObj.amount}</div>
            </div>
  
            <div class="price-addOrder">
                <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <div class="add-choice">
                    <button  id="btn-add-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add Salad" onclick="getOrderSalad(${index})">
                      
                        <i  class="bi bi-plus-lg" aria-hidden="true"></i>
                  
                    </button>
                </div>
            </div> 
        </div>
    `;
}
