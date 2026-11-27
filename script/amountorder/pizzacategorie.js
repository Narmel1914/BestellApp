
function getOrderPizza(ID) {
    document.getElementById('empty-basket-text-display').style.display = 'none';
    if (ID === 0) {
        getMagherittatoBasket(ID);
        increaseOrderBasket(ID, 'margheritta-pizza');
    }

    else if (ID === 1) {
        getChorizotoBasket(ID)
        increaseOrderBasket(ID, 'chorizo-pizza');
    }
    else if (ID === 2) {
        getFunghitoBasket(ID);
        increaseOrderBasket(ID, 'funghi-pizza');
    }
    else if (ID === 3) {
        getQuattrotoBasket(ID);
        increaseOrderBasket(ID, 'quattro-pizza');

    }

}

