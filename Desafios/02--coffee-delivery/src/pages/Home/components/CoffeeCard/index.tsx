import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import Expresso from "../../../../assets/coffee/Expresso.svg";
import {
  CoffeeCardContainer,
  CoffeeCardTags,
  CoffeeCardBuy,
  CoffeeCardActions,
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Expresso} />
      <CoffeeCardTags>
        <span>tradicional</span>
        <span>com leite</span>
      </CoffeeCardTags>
      <h2>Expresso Tradicional</h2>
      <p className="description">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <CoffeeCardBuy>
        <p className="price">
          <span>R$</span>
          <strong>9,90</strong>
        </p>
        <CoffeeCardActions>
          <div>
            <Minus size={14} weight="bold" />
            <p className="qtty">1</p>
            <Plus size={14} weight="bold" />
          </div>
          <ShoppingCart size={38} weight="fill" />
        </CoffeeCardActions>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  );
}
