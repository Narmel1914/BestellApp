
function getOrderSalad(ID) {
    document.getElementById('empty-basket-text-display').style.display = 'none';

    if (ID === 0) {
        getWarmBeefootBasket(ID);
        increaseOrderBasket(ID, 'warm-salad');
    }

    else if (ID === 1) {
        getMiniGreentoBasket(ID)
        increaseOrderBasket(ID, 'mini-salad');
    }
    else if (ID === 2) {
        getSaladSeeFoodtoBasket(ID)
        increaseOrderBasket(ID, 'food-salad');
    }
    else if (ID === 3) {
        getVeganSaladTofutoBasket(ID)
        increaseOrderBasket(ID, 'tofu-salad');

    }

}
