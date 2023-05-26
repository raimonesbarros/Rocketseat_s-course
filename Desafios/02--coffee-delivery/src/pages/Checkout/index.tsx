import { DeliveryAddress } from "./components/Address";
import { OrderCard } from "./components/OrderCard";
import { FormOfPayment } from "./components/Payment";
import { CheckoutStyles } from "./styles";

export function Checkout() {
  return (
    <CheckoutStyles>
      <div className="container">
        <div className="delivery">
          <h2>Complete seu pedido</h2>
          <DeliveryAddress />
          <FormOfPayment />
        </div>
        <div className="orderCard">
          <h2>Cafés selecionados</h2>
          <OrderCard />
        </div>
      </div>
    </CheckoutStyles>
  );
}
