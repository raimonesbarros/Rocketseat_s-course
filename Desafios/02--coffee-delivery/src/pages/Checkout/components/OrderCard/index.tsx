import { NavLink } from "react-router-dom";
import { Order } from "./Order";
import { OrderCardContainer, OrderCardTotal } from "./styles";

export function OrderCard() {
  return (
    <OrderCardContainer>
      <Order />
      <Order />
      <OrderCardTotal>
        <p>
          Total de itens <span>R$ 19,80</span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <p>
          <strong>Total</strong>
          <strong>R$ 23,30</strong>
        </p>
      </OrderCardTotal>
      <NavLink className="link" to={"/success"}>
        <button type="submit">Confirmar pedido</button>
      </NavLink>
    </OrderCardContainer>
  );
}
