import { styled } from "styled-components";

export const CoffeeCardStyles = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.base200};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem !important;
  }

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span {
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme.secondary_light};
      border-radius: 100px;

      font-weight: 700;
      font-size: 10px;
      text-transform: uppercase;
      color: ${(props) => props.theme.secondary_dark};
    }
  }

  h2 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.25rem;

    color: ${(props) => props.theme.base800};
  }

  .description {
    font-size: 14px;
    text-align: center;

    color: ${(props) => props.theme.base600};
  }

  .buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.8125rem;

    margin: 0 0.25rem;

    .price {
      color: ${(props) => props.theme.base700};

      span {
        font-size: 0.875rem;
        padding-right: 0.25rem;
      }

      strong {
        font-family: "Baloo 2", cursive;
        font-weight: 800;
        font-size: 1.5rem;
      }
    }

    .actions {
      gap: 0.5rem;
      display: flex;
      align-items: center;

      .counter {
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
        }
      }

      .cart {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        background: ${(props) => props.theme.primary_dark};
        color: ${(props) => props.theme.base200};
        border-radius: 6px;
      }
    }
  }
`;
