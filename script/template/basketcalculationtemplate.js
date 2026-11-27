function sumOrder(ID) {
    return /*html*/ ` 
        <div class=calculation-top>
                  <table class="basket-table">
                        <thead>
                            <tr>
                                <th class="sub-total-basket">Subtotal</th>
                                <td id="amount-by-price-without-fee-${ID}"></td>
                            </tr>
                            <tr>
                                <th class="delivery-fee">Delivery fee</th>
                                 <td id ="delivery-fee-basket-${ID}"> 4.99€</td>
                            </tr>
                      </thead>
                    </table> 
                    <table class="basket-table-Total">
                        <thead>  
                            <tr>
                                <th class="Total">Total</th>
                                <td id="amount-by-price-with-fee-${ID}"></td>
                            </tr>
                      </thead>
                    </table> 
                      
        </div>
                
        <div class="calculation-bottom" onclick="submitPayment(${ID})">
            <div class="buy-now-wrapper">
                    <div class="buy-now">
                <span class="submit-label">Buy now</span>
            </div>
            <div class="confirm-order">
                <button id="confirm-order-${ID}" class="submit-payement" type="button"></button>
            </div>
            </div>
        </div>
   `;

}


function submitPayment(ID) {
    const total = document.getElementById("amount-by-price-with-fee-" + ID);
    console.log('total:', total.textContent);

    const confirm_order = document.getElementById("confirm-order-" + ID);
    confirm_order.innerHTML = `${total.textContent.trim()}`;

}