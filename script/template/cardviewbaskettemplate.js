function renderWarenkorb(ArrObj, index) {
    return /*html*/ `
        <div class="single-menu-burger"> 
            <div id="show-img-choice-${index}" class="img-order">
                <img src="${ArrObj.image}" alt="burger">
                  </div>
            <div class="title-content-burger">
                <h4 id="name-burger"> ${ArrObj.name}</h4>
                <h6 id="burger-description">${ArrObj.description}</h6>
            </div>
            <div class="price-addOrder">
            <div id="price">${Number(ArrObj.price).toFixed(2).replace(".", ",")} €</div>
            <div class="add-choice">
                    <button id="btn-add-burger-${index}" type="button" class="btn-icon btn-lg rounded-pill" aria-label="Add burger" onclick="getOrder(${index})">
                       
                        <i class="bi-plus-lg" aria-hidden="true"></i>
                       
                    </button>
                </div>
            </div> 
        </div>
    `;
}