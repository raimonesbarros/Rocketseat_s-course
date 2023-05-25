import { MapPinLine } from "@phosphor-icons/react";
import { DeliveryAddressStyles } from "./styles";

export function DeliveryAddress() {
  return (
    <DeliveryAddressStyles>
      <div className="header">
        <MapPinLine className="mapinline" size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <DeliveryAddress />
    </DeliveryAddressStyles>
  );
}
