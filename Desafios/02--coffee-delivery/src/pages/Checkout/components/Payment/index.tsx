import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FormOfPaymentStyles } from "./styles";

export function FormOfPayment() {
  return (
    <FormOfPaymentStyles>
      <div className="header">
        <CurrencyDollar className="currencyDollar" size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <form action="">
        <label htmlFor="payment">
          <label htmlFor="creditCard">
            <CreditCard size={16} className="icon" /> Cartão de Crédito
            <input type="radio" name="payment" id="creditCard" />
          </label>
          <label htmlFor="debitCard">
            <Bank size={16} className="icon" /> Cartão de Débito
            <input type="radio" name="payment" id="debitCard" />
          </label>
          <label htmlFor="cash">
            <Money size={16} className="icon" /> Dinheiro
            <input type="radio" name="payment" id="cash" />
          </label>
        </label>
      </form>
    </FormOfPaymentStyles>
  );
}
