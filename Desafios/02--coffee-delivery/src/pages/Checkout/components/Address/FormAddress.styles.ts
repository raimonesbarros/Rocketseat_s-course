import { styled } from "styled-components";

export const FormAddressStyles = styled.div`
  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input {
      width: 100%;
      height: 2.625rem;

      padding: 0.75rem;

      border: 1px solid ${(props) => props.theme.base400};
      border-radius: 4px;

      background: ${(props) => props.theme.base300};
      color: ${(props) => props.theme.base700};

      font-size: 0.875rem;

      &::placeholder {
        font-size: 0.875rem;
        color: ${(props) => props.theme.base600};
      }
    }

    label[for="cep"],
    label[for="number"],
    label[for="district"] {
      width: 35.7%;
    }

    label[for="street"] {
      width: 100%;
    }

    label[for="complement"] {
      width: 62.9%;
    }

    label[for="city"] {
      width: 50.6%;
    }

    label[for="uf"] {
      width: 10.714%;
    }

    .row3,
    .row4 {
      width: 100%;
      display: flex;
      column-gap: 0.5rem;
    }

    .row3 {
      grid-template-columns: auto auto;
    }
  }
`;
