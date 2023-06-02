import { MapPinLine } from "@phosphor-icons/react";
import { DeliveryAddressContainer } from "./styles";
import { FormAddress } from "./FormAddress";

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <div>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <FormAddress />
    </DeliveryAddressContainer>
  );
}
