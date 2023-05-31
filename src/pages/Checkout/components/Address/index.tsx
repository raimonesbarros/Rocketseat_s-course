import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  FormAddressContainer,
  FormOfPaymentContainer,
  PaymentTypeSelect,
} from "./styles";

export function FormToDelivery() {
  return (
    <form id="formDelivery" action="">
      <FormAddressContainer>
        <div>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <label htmlFor="cep">
          <input type="text" id="cep" placeholder="CEP" />
        </label>

        <label htmlFor="street">
          <input type="text" id="street" placeholder="Rua" />
        </label>

        <div className="row3">
          <label htmlFor="number">
            <input type="text" id="number" placeholder="Número" />
          </label>
          <label htmlFor="complement">
            <input type="text" id="complement" placeholder="Complemento" />
          </label>
        </div>

        <div className="row4">
          <label htmlFor="district">
            <input type="text" id="district" placeholder="Bairro" />
          </label>
          <label htmlFor="city">
            <input type="text" id="city" placeholder="Cidade" />
          </label>
          <label htmlFor="uf">
            <input type="text" id="uf" placeholder="UF" />
          </label>
        </div>
      </FormAddressContainer>
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
    </form>
  );
}
