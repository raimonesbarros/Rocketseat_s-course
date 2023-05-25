import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../../assets/Logo.svg";
import { HeaderStyles } from "./Header.styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyles>
      <nav>
        <NavLink to={'/'}>
          <img src={logo} />
        </NavLink>
        <div className="actions">
          <span className="location">
            <MapPin size={22} weight="fill" className="mapPin" /> Araguaína, TO
          </span>
          <NavLink to={'/checkout'} title="Meu carrinho">
            <span className="cart">
              <ShoppingCart size={22} weight="fill" />
            </span>
          </NavLink>
        </div>
      </nav>
    </HeaderStyles>
  );
}
