function sumOrder(index) {
    return /*html*/ ` 
        <div class=calculation-top>
                  <table class="basket-table">
                        <thead>
                            <tr>
                                <th class="sub-total-basket">Subtotal</th>
                                <td id="amount-by-price-without-fee-${index}"></td>
                            </tr>
                            <tr>
                                <th class="delivery-fee">Delivery fee</th>
                                 <td id ="delivery-fee-basket-${index}"> 4.99€</td>
                            </tr>
                      </thead>
                    </table> 
                    <table class="basket-table-Total">
                        <thead>  
                            <tr>
                                <th class="Total">Total</th>
                                <td id="amount-by-price-with-fee-${index}"></td>
                            </tr>
                      </thead>
                    </table> 
                      
        </div>
                
        <div class="calculation-bottom">
         
                <button id="confirm-order" class="submit-payement" type="submit">test</button>
         
        </div>
   `;

}