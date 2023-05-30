import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartType } from "../../../../contexts/OrderContext";
import {
  OrderContainer,
  OrderActions,
  OrderRemoveButton,
} from "./Order.styles";

export function Order({ img, name, price, qtty }: CartType) {
  return (
    <OrderContainer>
      <div>
        <img src={img} />
        <div>
          <p>{name}</p>
          <OrderActions>
            <div>
              <Minus size={14} weight="bold" />
              <p> {qtty} </p>
              <Plus size={14} weight="bold" />
            </div>
            <OrderRemoveButton>
              <Trash size={16} /> Remover
            </OrderRemoveButton>
          </OrderActions>
        </div>
      </div>
      <p>
        R${" "}
        {price?.toLocaleString("pt-BR", {
          style: "decimal",
          minimumFractionDigits: 2,
        })}
      </p>
    </OrderContainer>
  );
}
