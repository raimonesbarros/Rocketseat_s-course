import { styled } from "styled-components";

export const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.base100};

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  nav {
    width: 100%;
    max-width: 70rem;

    padding: 0 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 2.5rem;
    }
  }

  .actions {
    width: 12.0625rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    .location {
      width: 8.9375rem;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;
      gap: 0.25rem;

      border-radius: 6px;

      background: ${(props) => props.theme.primary_light};
      color: ${(props) => props.theme.primary_dark};

      font-size: 0.875rem;

      .mapPin {
        color: ${(props) => props.theme.primary_dark};
      }
    }

    .cart {
      width: 2.375rem;
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;
      border-radius: 6px;

      background: ${(props) => props.theme.secondary_light};
      color: ${(props) => props.theme.secondary_dark};
      cursor: pointer;
    }
  }
`;
