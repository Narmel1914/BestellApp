function renderBlackBurgerTemplate(ArrObj, index) {
    return /*html*/ `
        <div class="single-menu-burger"> 
            <div id="show-img-choice-${index}" class="img-order">
                <img src="${ArrObj.image}" alt="burger">
                  </div>
            <div class="title-content-burger">
                <h3 id="name-burger"> ${ArrObj.name}</h3>
                <h6 id="burger-description">${ArrObj.description}</h6>
            </div>
            <div class="price-addOrder">
                <div id="price">${ArrObj.price}</div>
            <div class="add-choice">
                    <button  id="btn-add" type="button" class="btn-icon theme-danger btn-solid btn-styled" aria-label="Icon only" onclick="getOrder()">
                        <svg class="bi" width="16" height="16" aria-hidden="true">
                            <use href="#plus-lg" />
                        </svg>
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
                <h3 id="name-pizza"> ${ArrObj.name}</h3>
                <h6 id="pizza-description">${ArrObj.description}</h6>
            </div>
            <div class="price-addOrder">
                <div id="price">${ArrObj.price}</div>
            <div class="add-choice">
                    <button  id="btn-add" type="button" class="btn-icon theme-danger btn-solid btn-styled" aria-label="Icon only" onclick="getOrder()">
                        <svg class="bi" width="16" height="16" aria-hidden="true">
                            <use href="#plus-lg" />
                        </svg>
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
                <h3 id="name-salad"> ${ArrObj.name}</h3>
                <h6 id="salad-description">${ArrObj.description}</h6>
            </div>
            <div class="price-addOrder">
                <div id="price">${ArrObj.price}</div>
            <div class="add-choice">
                    <button  id="btn-add" type="button" class="btn-icon theme-danger btn-solid btn-styled" aria-label="Icon only" onclick="getOrder()">
                        <svg class="bi" width="16" height="16" aria-hidden="true">
                            <use href="#plus-lg" />
                        </svg>
                    </button>
                </div>
            </div> 
        </div>
    `;
}


