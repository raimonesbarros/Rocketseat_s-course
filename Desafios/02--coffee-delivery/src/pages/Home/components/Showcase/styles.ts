import { styled } from "styled-components";

export const ShowcaseStyles = styled.div`
  width: 100%;

  .container {
    max-width: 70rem;

    margin: auto;
    padding: 5.75rem 0.5rem;
    gap: 3.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${props => props.theme.base900};
    align-self: stretch;
  }

  .subtitle {
    font-size: 1.25rem;
    color: ${props => props.theme.base800};
    font-stretch: 100;
    align-self: stretch;
  }

  .benefits {
    width: 100%;

    margin-top: 4.125rem;

    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.5rem;
    row-gap: 1.25rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        width: 2rem;
        height: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        color: ${props => props.theme.base100};
      }

      .cart {
        background: ${props => props.theme.secondary_dark};
      }
      .package {
        background: ${props => props.theme.base700};
      }
      .timer {
        background: ${props => props.theme.secondary};
      }
      .coffee {
        background: ${props => props.theme.primary};
      }
    }
  }

`;
