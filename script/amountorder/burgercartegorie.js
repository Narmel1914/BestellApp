function getOrderBurger(ID) {
    document.getElementById('empty-basket-text-display').style.display = 'none';

    if (ID === 0) {
        getBurgertoBasket(ID);
        increaseOrderBasket(ID, 'black-burger');
    }
    else if (ID === 1) {
        getMeatBurgertoBasket(ID);
        increaseOrderBasket(ID, 'meat-burger');
    }
    else if (ID === 2) {
        getRedBurgertoBasket(ID);
        increaseOrderBasket(ID, 'red-burger');
    }
    else if (ID === 3) {
        getBigChickenBurgertoBasket(ID);
        increaseOrderBasket(ID, 'chicken-burger');
    }
}