import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { FormOfPaymentContainer, PaymentTypeSelect } from "./styles";

export function FormOfPayment() {
  return (
    <FormOfPaymentContainer>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <PaymentTypeSelect>
        <label htmlFor="payment">
          <label htmlFor="creditCard">
            <CreditCard size={16} /> Cartão de Crédito
            <input type="radio" name="payment" id="creditCard" />
          </label>
          <label htmlFor="debitCard">
            <Bank size={16} /> Cartão de Débito
            <input type="radio" name="payment" id="debitCard" />
          </label>
          <label htmlFor="cash">
            <Money size={16} /> Dinheiro
            <input type="radio" name="payment" id="cash" />
          </label>
        </label>
      </PaymentTypeSelect>
    </FormOfPaymentContainer>
  );
}
