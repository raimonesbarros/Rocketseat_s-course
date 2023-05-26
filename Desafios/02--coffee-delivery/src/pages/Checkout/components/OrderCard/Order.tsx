import { Minus, Plus, Trash } from "@phosphor-icons/react";
import Expresso from "../../../../assets/coffee/Expresso.svg"
import { OrderStyles } from "./Order.styles";

export function Order(){
  return(
    <OrderStyles>
      <div className="info">
        <img src={Expresso}/>
        <div className="details">
          <p>Expresso Tradicional</p>
          <div className="actions">
            <div className="counter">
              <Minus className="minus" size={14} weight="bold" />
              <p className="qtty"> 1 </p>
              <Plus className="plus" size={14} weight="bold" />
            </div>
            <button><Trash size={16}/> Remover</button>
          </div>
        </div>
      </div>
      <p>R$ 9,90</p>
    </OrderStyles>
  )
}