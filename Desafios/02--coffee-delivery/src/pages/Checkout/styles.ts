import { styled } from "styled-components";

export const CheckoutStyles = styled.div`
  margin-top: 2.5rem;

  .container {
    width: 100%;
    max-width: 70rem;

    margin: auto;

    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .delivery,
    .orderCard {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .delivery {
      width: 57.14%;
      max-width: 40rem;
    }

    .orderCard {
      width: 40%;
      max-width: 28rem;
    }

    h2 {
      font-family: "Baloo 2", cursive;
      font-weight: 700;
      font-size: 1.125rem;

      display: flex;
      align-items: center;

      color: ${(props) => props.theme.base800};
      margin-bottom: 0.25rem;
    }
  }
`;
