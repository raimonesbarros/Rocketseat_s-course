import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListStyles } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListStyles>
      <div className="container">
        <div className="header">
          <h2>Nossos cafés</h2>
          <nav className="filter">
            <li>TRADICIONAL</li>
            <li>ESPECIAL</li>
            <li>COM LEITE</li>
            <li>ALCOÓLICO</li>
            <li>GELADO</li>
          </nav>
        </div>
        <div className="coffeeList">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </CoffeeListStyles>
  );
}
