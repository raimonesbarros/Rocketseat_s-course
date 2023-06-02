import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import {
  CartHeader,
  HeaderActions,
  HeaderContainer,
  Location,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to={"/"}>
          <img src={logo} />
        </NavLink>
        <HeaderActions>
          <Location>
            <MapPin size={22} weight="fill" className="mapPin" /> Araguaína, TO
          </Location>
          <NavLink to={"/checkout"} title="Meu carrinho">
            <CartHeader>
              <ShoppingCart size={22} weight="fill" />
            </CartHeader>
          </NavLink>
        </HeaderActions>
      </nav>
    </HeaderContainer>
  );
}
