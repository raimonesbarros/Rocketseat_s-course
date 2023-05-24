import { styled } from "styled-components";

export const CoffeeListStyles = styled.div`
  width: 100%;

  .container {
    max-width: 70rem;

    margin: auto;
    padding: 2rem 0;
  }

  .header {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 2rem;

      display: flex;
      align-items: center;

      color: ${(props) => props.theme.base800};
    }

    nav {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      li {
        padding: 0.375rem 0.75rem;
        border: 1px solid ${(props) => props.theme.secondary};
        border-radius: 100px;
        list-style: none;

        font-weight: 700;
        font-size: 0.625rem;
        text-transform: uppercase;

        color: ${(props) => props.theme.secondary_dark};
        cursor: pointer;
      }
    }
  }

  .coffeeList {
    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;

    margin-top: 3.375rem;
  }
`;
