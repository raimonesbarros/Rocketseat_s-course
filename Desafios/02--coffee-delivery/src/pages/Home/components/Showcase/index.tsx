import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import dummy from "../../../../assets/Imagem.svg";
import { ShowcaseStyles } from "./styles";

export function Showcase() {
  return (
    <ShowcaseStyles>
      <div className="container">
        <div className="description">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="subtitle">
            Com o coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="benefits">
            <p>
              <span className="cart">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span className="package">
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span className="timer">
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span className="coffee">
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
        <img src={dummy} />
      </div>
    </ShowcaseStyles>
  );
}
