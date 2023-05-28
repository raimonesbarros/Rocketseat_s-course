import { CoffeeCard } from "../CoffeeCard";
import {
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListContent,
} from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <div>
        <CoffeeListHeader>
          <h2>Nossos cafés</h2>
          <nav className="filter">
            <li>TRADICIONAL</li>
            <li>ESPECIAL</li>
            <li>COM LEITE</li>
            <li>ALCOÓLICO</li>
            <li>GELADO</li>
          </nav>
        </CoffeeListHeader>
        <CoffeeListContent>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeListContent>
      </div>
    </CoffeeListContainer>
  );
}
