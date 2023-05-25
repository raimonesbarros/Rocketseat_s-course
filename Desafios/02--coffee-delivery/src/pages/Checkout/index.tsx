import { CheckoutStyles } from "./styles";

export function Checkout(){
  return(
    <CheckoutStyles>
      <div className="container">
        <div className="delivery">
          <h2>Complete seu pedido</h2>

        </div>
        <div className="order">
          <h2>Cafés selecionados</h2>
        </div>
      </div>
    </CheckoutStyles>
  )
}