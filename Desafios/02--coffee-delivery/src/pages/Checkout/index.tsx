import { DeliveryAddress } from "./components/Address";
import { OrderCard } from "./components/OrderCard";
import { FormOfPayment } from "./components/Payment";
import {
  CheckoutContainer,
  CheckoutDelivery,
  CheckoutOrderCard,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutDelivery>
          <h2>Complete seu pedido</h2>
          <DeliveryAddress />
          <FormOfPayment />
        </CheckoutDelivery>
        <CheckoutOrderCard>
          <h2>Cafés selecionados</h2>
          <OrderCard />
        </CheckoutOrderCard>
      </div>
    </CheckoutContainer>
  );
}
