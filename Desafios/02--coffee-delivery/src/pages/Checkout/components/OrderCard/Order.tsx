import { Minus, Plus, Trash } from "@phosphor-icons/react";
import Expresso from "../../../../assets/coffee/Expresso.svg";
import {
  OrderContainer,
  OrderActions,
  OrderRemoveButton,
} from "./Order.styles";

export function Order() {
  return (
    <OrderContainer>
      <div>
        <img src={Expresso} />
        <div>
          <p>Expresso Tradicional</p>
          <OrderActions>
            <div>
              <Minus size={14} weight="bold" />
              <p> 1 </p>
              <Plus size={14} weight="bold" />
            </div>
            <OrderRemoveButton>
              <Trash size={16} /> Remover
            </OrderRemoveButton>
          </OrderActions>
        </div>
      </div>
      <p>R$ 9,90</p>
    </OrderContainer>
  );
}
