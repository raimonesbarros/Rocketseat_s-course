import { styled } from "styled-components";

export const SuccessStyles = styled.div`
  padding-top: 5rem;

  .container {
    width: 100%;
    max-width: 70rem;

    margin: auto;

    h2 {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 2rem;

      color: ${(props) => props.theme.secondary_dark};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme.base800};
    }

    .viewerDeliveryInfo {
      width: 100%;
      margin-top: 1.75rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      .border {
        width: 100%;

        background: linear-gradient(
          102.89deg,
          ${(props) => props.theme.secondary} 2.61%,
          ${(props) => props.theme.primary} 98.76%
        );

        border-radius: 6px 36px;
        margin: 1rem 2.875rem;
      }

      .infoCard {
        margin: 1px 1.5px;
        padding: 2.5rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;

        border-radius: 6px 36px;
        background: ${(props) => props.theme.base100};

        .addressInfo,
        .timerInfo,
        .paymentInfo {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 0.75rem;

          span {
            width: 2rem;
            height: 2rem;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            color: ${(props) => props.theme.base100};
          }

          p {
            color: ${(props) => props.theme.base700};

            strong {
              font-weight: 700;
            }
          }
        }

        .addressInfo span {
          background: ${(props) => props.theme.primary};
        }
        .timerInfo span {
          background: ${(props) => props.theme.secondary};
        }
        .paymentInfo span {
          background: ${(props) => props.theme.secondary_dark};
        }
      }

      img {
        width: 100%;
      }
    }
  }
`;
