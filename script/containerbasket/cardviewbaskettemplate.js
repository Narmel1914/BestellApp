function renderBackBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `    
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">  
                <div id="amount-black-burger-to-basket-${index}" class="amount-burger-to-basket"></div>  <!--${ArrObj.amount}-->
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <!--<div class="trash"><img src="../assets/icons/delete.png" alt="delete.png"></div>-->
        
                <div class="add-remove-items">
                    <div class="remove-choice">
                        <button id="remove-black-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                        
                            <i class="bi-dash" aria-hidden="true"></i>
                        
                        </button>
                    </div>
                    <div id="total-amount-order-burger-${index}" class="total-amount"></div>

                    <div class="add-choice">
                        <button id="add-black-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add to basket" onclick="increaseOrderBasket(${index})">
                        
                            <i class="bi-plus" aria-hidden="false"></i>
                        
                        </button>
                    </div>

                    <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                </div>
            
            </div> 
        </div>
    `;
}

function renderMeatBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-meat-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
                <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-meat-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-meat-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
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
                <div id="amount-red-burger-to-basket-${index}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
          <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-red-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-red-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderBigChickenBurgerWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-chicken-burger-to-basket-${index}" class="amount-burger-to-basket">${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-chicken-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-chicken-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}


/* Pizza */

function renderMargherittaWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-margheritta-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-margheritta-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-margheritta-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-margheritta-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderChorizoWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-chorizo-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-chorizo-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
     <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-chorizo-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-chorizo-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderFunghiWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-funghi-pizza-to-basket-${index}" class="amount-pizza-to-basket"> ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-funghi-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-funghi-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-funghi-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderQuattroWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-quattro-pizza-to-basket-${index}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-quattro-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-quattro-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-quattro-pizza-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}


/* Salad */

function renderWarmBeeWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-warm-salad-to-basket-${index}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-warm-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
             <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-warm-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-warm-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderMiniGreenWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-mini-salad-to-basket-${index}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-salas-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-mini-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove  Salad" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-mini-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add Salad" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderSeeFoodWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-food-salad-to-basket-${index}" class="amount-salad-to-basket"> ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-food-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-food-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-food-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderVeganSaladTofu(ArrObj, index) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-tofu-salad-to-basket-${index}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-tofu-${index}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-tofu-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${index})">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${index}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-tofu-salad-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${index})">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${index}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}