
function addBankMarkup() {

  return `
     <div class="js-modal modal" data-modal="createNewBank">
      <button class="backdrop-modal-close js-close-modal" type="button" data-modal="close">
        <svg class="modal-close-btn-svg" width="15" height="15">
          <use href="./img/javascript.svg#icon-cross"></use>
        </svg>
      </button>

      <h2 class="modal-title">Add new bank</h2>

      <form class="form" autocomplete="off">
        <div class="modal-input-wrap">
          <label for="bankName">Bank name</label>
          <input type="text" name="bankName" required />
        </div>

        <div class="modal-input-wrap">
          <label for="interestRate">Interest rate</label>
          <input type="number" name="interestRate" required />
        </div>
        
        <div class="modal-input-wrap">
          <label for="maxLoan">Max loan</label>
          <input type="number" name="maxLoan" required />
        </div>

        <div class="modal-input-wrap">
          <label for="minPayment">Min payment</label>
          <input type="number" name="minPayment" required />
        </div>

        <div class="modal-input-wrap">
          <label for="loanTerm">Loan term</label>
          <input type="number" name="loanTerm" required />
        </div>

        <button class="bank-items-btn modal-add-btn" type="submit">
          <p>Add new bank</p>
          <svg class="bank-icon"  width="24" height="24">
            <use href="./img/javascript.svg#icon-library" width="24" height="24"></use>
          </svg>
        </button>
      </form>
    </div>

    <div class="js-modal-overlay overlay"></div>
    `;
}

function renderAddBankForms(refs){ 

  refs.modalForm.id = "MyIdForModalForm";
  refs.modalForm.innerHTML = addBankMarkup();

}

export default renderAddBankForms;