function sumOrder(index) {
    return /*html*/ ` 
        <div class=calculation-top>
                  <table class="basket-table">
                        <thead>
                            <tr>
                                <th class="sub-total-basket">Subtotal</th>
                                <td id="amount-by-price-without-fee-${index}">:${XXXX}</td>
                            </tr>
                            <tr>
                                <th class="delivery-fee">Delivery fee</th>
                                 <td id ="delivery-fee-basket">4.99€</td>
                            </tr>
                            <hr class="white-line">
                            <tr>
                                <th class="Total">Total</th>
                                <td id="amount-by-price-with-fee-${index}">:${XXXX}</td>
                            </tr>
                        </thead>
                    </table>
        </div>
              
        <div class=calculation-bottom>
            <div class="confirm-order">
                <button type="submit"></button>
            </div>
        </div>
   `;

}