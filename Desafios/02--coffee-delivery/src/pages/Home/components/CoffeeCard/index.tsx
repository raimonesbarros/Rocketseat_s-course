import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import Expresso from "../../../../assets/coffee/Expresso.svg";
import { CoffeeCardStyles } from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardStyles>
      <img src={Expresso} />
      <div className="tags">
        <span>tradicional</span>
        <span>com leite</span>
      </div>
      <h2>Expresso Tradicional</h2>
      <p className="description">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="buy">
        <p className="price">
          <span>R$</span>
          <strong>9,90</strong>
        </p>
        <div className="actions">
          <div className="counter">
            <Minus className="minus" size={14} weight="bold" />
            <p className="qtty">1</p>
            <Plus className="plus" size={14} weight="bold" />
          </div>
          <ShoppingCart className="cart" size={38} weight="fill" />
        </div>
      </div>
    </CoffeeCardStyles>
  );
}
