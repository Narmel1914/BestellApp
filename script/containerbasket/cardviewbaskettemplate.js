function renderBackBurgerWarenkorb(ArrObj, ID) {
    return /*html*/ `    
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">  
                <div id="amount-black-burger-to-basket-${ID}" class="amount-burger-to-basket"> ${ArrObj.amount}</div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <!--<div class="trash"><img src="../assets/icons/delete.png" alt="delete.png"></div>-->
        
                <div class="add-remove-items">
                    <div class="remove-choice">
                        <button id="remove-black-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'black-burger')">
                        
                            <i class="bi-dash" aria-hidden="true"></i>
                        
                        </button>
                    </div>
                    <div id="total-amount-order-burger-${ID}" class="total-amount"></div>

                    <div class="add-choice">
                        <button id="add-black-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add to basket" onclick="increaseOrderBasket(${ID}, 'black-burger')">
                        
                            <i class="bi-plus" aria-hidden="false"></i>
                        
                        </button>
                    </div>

                    <div id="price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                </div>
            
            </div> 
        </div>
    `;
}

function renderMeatBurgerWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-meat-burger-to-basket-${ID}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
                <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-meat-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'meat-burger')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-meat-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'meat-burger')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}


function renderRedBurgerWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-red-burger-to-basket-${ID}" class="amount-burger-to-basket">  ${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
          <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-red-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger"onclick="decreaseOrdertoBasket(${ID}, 'red-burger')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-red-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'red-burger')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderBigChickenBurgerWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="burger-categorie-basket"> 
            <div class="title-content-burger-to-basket">
                <div id="amount-chicken-burger-to-basket-${ID}" class="amount-burger-to-basket">${ArrObj.amount} </div>
                <div class="basket-burger"> <h4 class="basket-burger" id="name-burger-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-chicken-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'chicken-burger')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-burger-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-chicken-burger-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID},'chicken-burger')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}


/* Pizza */

function renderMargherittaWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-margheritta-pizza-to-basket-${ID}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-margheritta-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-margheritta-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove pizza"  onclick="decreaseOrdertoBasket(${ID}, 'margheritta-pizza')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-margheritta-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add pizza" onclick="increaseOrderBasket(${ID},'margheritta-pizza')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderChorizoWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-chorizo-pizza-to-basket-${ID}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-chorizo-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
     <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-chorizo-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'chorizo-pizza')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-chorizo-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'chorizo-pizza')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderFunghiWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-funghi-pizza-to-basket-${ID}" class="amount-pizza-to-basket"> ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-funghi-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-funghi-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'funghi-pizza')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-funghi-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'funghi-pizza')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderQuattroWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-pizza-to-basket">
                <div id="amount-quattro-pizza-to-basket-${ID}" class="amount-pizza-to-basket">  ${ArrObj.amount} </div>
                <div class="pizza-basket"> <h4 class="pizza-basket" id="name-quattro-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
         <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-quattro-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove pizza"  onclick="decreaseOrdertoBasket(${ID}, 'quattro-pizza')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-pizza-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-quattro-pizza-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add pizza" onclick="increaseOrderBasket(${ID}, 'quattro-pizza')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="pizza-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}


/* Salad */

function renderWarmBeeWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-warm-salad-to-basket-${ID}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-warm-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
             <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-warm-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'warm-salad')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-warm-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID},'warm-salad')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderMiniGreenWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="pizza-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-mini-salad-to-basket-${ID}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-salas-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-mini-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove  Salad" onclick="decreaseOrdertoBasket(${ID}, 'mini-salad')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-mini-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add Salad" onclick="increaseOrderBasket(${ID},  'mini-salad')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderSeeFoodWarenkorb(ArrObj, ID) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-food-salad-to-basket-${ID}" class="amount-salad-to-basket"> ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-food-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
           <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-food-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'food-salad')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-food-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'food-salad')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}

function renderVeganSaladTofu(ArrObj, ID) {
    return /*html*/ `
        <div class="salad-categorie-basket"> 
            <div class="title-content-salad-to-basket">
                <div id="amount-tofu-salad-to-basket-${ID}" class="amount-salad-to-basket">  ${ArrObj.amount} </div>
                <div class="salad-basket"> <h4 class="salad-basket" id="name-tofu-${ID}"> x ${ArrObj.name}</h4></div> 
            </div>
            <div class="order-into-basket">
            <div class="add-remove-items">
                        <div class="remove-choice">
                            <button id="remove-tofu-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Remove burger" onclick="decreaseOrdertoBasket(${ID}, 'tofu-salad')">
                            
                                <i class="bi-dash" aria-hidden="true"></i>
                            
                            </button>
                        </div>
                        <div id="total-amount-order-salad-${ID}" class="total-amount"></div>

                        <div class="add-choice">
                            <button id="add-tofu-salad-${ID}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="increaseOrderBasket(${ID}, 'tofu-salad')">
                            
                                <i class="bi-plus" aria-hidden="true"></i>
                            
                            </button>
                        </div>

                        <div id="salad-price-${ID}">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
                    </div>
            </div> 
        </div>
    `;
}