import { NavLink } from "react-router-dom";
import { Order } from "./Order";
import { OrderCardStyles } from "./styles";

export function OrderCard() {
  return (
    <OrderCardStyles>
      <Order />
      <Order />
      <div className="total">
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
      </div>
      <NavLink className="link" to={"/success"}>
        <button type="submit">Confirmar pedido</button>
      </NavLink>
    </OrderCardStyles>
  );
}
