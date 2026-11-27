function renderDialogueTemplate() {
    return /*html*/`
      <div class="dialog-content">
            <div class="dialog-actions">
              <button
                type="button"
                class="dialog-btn-confirm"
                id="dialog-confirm"
              >
                Confirmer
              </button>
              <div class="logo-car-confirmed-text">
                <div class="img-car-order">
                  <img
                    src="../assets/icons/bestellung-car.png"
                    alt="bestellung-car.png"
                  />
                </div>
                <div class="confirmed-text">
                  <h3>Orderconfirmed !</h3>
                  <h4>Your food is on the way!</h4>
                </div>
              </div>
            </div>
          </div>
    
    `;
} 