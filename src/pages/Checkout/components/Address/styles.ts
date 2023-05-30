import { styled } from "styled-components";

export const DeliveryAddressContainer = styled.div`
  width: 100%;

  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.base200};
  border-radius: 6px;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.secondary_dark};
    }

    h3 {
      color: ${(props) => props.theme.base800};
    }

    p {
      color: ${(props) => props.theme.base700};
      font-size: 0.875rem;
    }
  }

  @media screen and (width<= 500px) {
    padding: 0.5rem;
  }
`;
