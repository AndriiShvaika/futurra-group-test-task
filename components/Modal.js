app.component("modal", {
  template:
    /*html*/
    `
    <div class="modal__wrapper">
      <div class="modal__content">
        <h3 class="modal__title">
        Payment method
        </h3>
        <div class="modal__paypal-button">
          <img src="../assets/images/PayPal.svg" class="modal__paypal-image" alt="PayPal Logo"/>
          BUY NOW
        </div>
        <div class="modal__google-pay-button">
          <img src="../assets/images/GooglePay.svg" class="modal__google-pay-image" alt="GooglePay Logo"/>
          PAY
        </div>
        <img src="../assets/images/option-divider.svg" class="modal__option-divider" alt=""/>
        <form class="modal__form">
          <fieldset class="modal__card-container">
            <legend>Card number</legend>
            <input v-model="cardInput" v-on:input="changeCardInput" type="text" name="card-number" id="card-number" maxlength="19" placeholder="••••  ••••  ••••  ••••" required>
            <img class="modal__card-image" src="../assets/images/Mastercard.svg" alt=""/>
          </fieldset>

          <div class="modal__masks-wrapper">
            <fieldset class="modal__card-container cursor-pointer">
              <legend>Month</legend>
              <span class="modal__card-text">Select</span>
              <img class="modal__arrow-down" src="../assets/images/arrowDown.svg" alt=""/>
            </fieldset>

            <fieldset class="modal__card-container cursor-pointer">
              <legend>Year</legend>
              <span class="modal__card-text">Select</span>
              <img class="modal__arrow-down" src="../assets/images/arrowDown.svg" alt=""/>
            </fieldset>

            <fieldset class="modal__card-container">
              <legend>CVC</legend>
              <input v-model="cvcInput" v-on:input="changeCVCInput" type="password" name="cvc-number" id="cvc-number" maxlength="3" placeholder="•••" required>
            </fieldset>
          </div>
          
          <button :class="cardInput?.length === 19 && cvcInput?.length === 3 ? 'submit-active' : ''" class="modal__submit">Submit</button>

          <span class="modal__close" @click="closeModal">Close</span>
        </form>
      </div>
  </div>
  `,
  data() {
    return {
      cardInput: null,
      cvcInput: null,
    };
  },
  methods: {
    closeModal() {
      this.cardInput = null;
      this.cvcInput = null;
      this.$emit("show-modal");
    },
    changeCardInput() {
      this.cardInput = event.target.value
        .replace(/\D/g, "")
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .substring(0, 19)
        .trim();
    },
    changeCVCInput() {
      this.cvcInput = event.target.value
        .replace(/\D/g, "")
        .substring(0, 3)
        .trim();
    },
  },
});
