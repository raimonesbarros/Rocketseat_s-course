import {
  SuccessContainer,
  ViewerDeliveryInfo,
  BorderGradient,
  InfoCardDelivery,
} from "./styles";
import illustration from "../../assets/Illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <div className="message">
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <ViewerDeliveryInfo>
          <BorderGradient>
            <InfoCardDelivery>
              <div className="addressInfo">
                <span>
                  <MapPin size={16} weight="fill" />
                </span>
                <p>
                  Entrega em <strong>Rua Joao Daniel, 102</strong>
                  <p>Farrapos - Porto Alegre, RS</p>
                </p>
              </div>
              <div className="timerInfo">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>
                  Previsão de entrega
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </p>
              </div>
              <div className="paymentInfo">
                <span>
                  <CurrencyDollar size={16} />
                </span>
                <p>
                  Pagamento na entrega
                  <p>
                    <strong>Cartão de Crédito</strong>
                  </p>
                </p>
              </div>
            </InfoCardDelivery>
          </BorderGradient>
          <img src={illustration} />
        </ViewerDeliveryInfo>
      </div>
    </SuccessContainer>
  );
}
