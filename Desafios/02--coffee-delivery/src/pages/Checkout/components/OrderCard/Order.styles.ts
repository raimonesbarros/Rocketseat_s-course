import { styled } from "styled-components";

export const OrderStyles = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  align-items: flex-start;
  padding: 0.5rem 0.25rem 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme.base400};

  .info {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;

      .actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .counter {
          height: 2rem;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 0.5rem;
          gap: 0.4rem;

          background: ${(props) => props.theme.base400};
          border-radius: 6px;

          .minus,
          .plus {
            color: ${(props) => props.theme.primary};

            &:hover {
              color: ${(props) => props.theme.primary_dark};
            }
          }

          .qtty {
            color: ${(props) => props.theme.base900};
            line-height: 0;
          }
        }

        button {
          height: 2rem;

          display: flex;
          align-items: center;
          gap: 0.25rem;

          padding: 0 0.5rem;
          border: none;
          border-radius: 6px;

          font-size: 0.75rem;
          line-height: 1.6;
          text-transform: uppercase;

          background: ${(props) => props.theme.base400};
          color: ${(props) => props.theme.base700};
        }

        button svg {
          color: ${(props) => props.theme.primary};
        }
      }
    }
  }

  p:last-child {
    font-weight: 700;
    color: ${(props) => props.theme.base700};
  }
`;
