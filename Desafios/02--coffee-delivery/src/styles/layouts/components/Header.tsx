import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../../assets/Logo.svg";
import { HeaderStyleContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderStyleContainer>
      <nav>
        <img src={logo} />
        <div className="actions">
          <span className="location">
            <MapPin size={22} weight="fill" className="mapPin" /> Araguaína, TO
          </span>
          <span className="cart">
            <ShoppingCart size={22} weight="fill" />
          </span>
        </div>
      </nav>
    </HeaderStyleContainer>
  );
}
