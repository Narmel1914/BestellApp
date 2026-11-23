function renderBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-order-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}

function renderMeatBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-order-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}


function renderRedBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-order-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}

function renderBigChickenBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-order-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}


/* Pizza */

function renderMargherittaWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-order-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-margheritta-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}

function renderChorizoWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-order-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-chorizo-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}

function renderFunghiWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-order-pizza-to-basket-${index}" class="amount-pizza-to-basket"> ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-funghi-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}

function renderQuattroWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-order-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-quattro-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <!--<div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrdertoBasket(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div> -->
            </div> 
        </div>
    `;
}