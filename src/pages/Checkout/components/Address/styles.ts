import { styled } from "styled-components";

export const FormAddressContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  border-radius: 6px;

  padding: 2.5rem;
  background: ${(props) => props.theme.base200};

  > div {
    display: flex;
    align-items: flex-start;
    padding-bottom: 0.5rem;

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

  > div {
    width: 100%;
    display: flex;
    column-gap: 0.5rem;
  }
`;

export const FormOfPaymentContainer = styled.div`
  width: 100%;

  padding: 2.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.base200};
  border-radius: 6px;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    > svg {
      color: ${(props) => props.theme.primary};
    }

    h3 {
      color: ${(props) => props.theme.base800};
    }

    p {
      color: ${(props) => props.theme.base700};
      font-size: 0.875rem;
    }
  }
`;

export const PaymentTypeSelect = styled.section`
  > label {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;

    label {
      width: 100%;
      max-width: 11.16rem;
      height: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      gap: 0.75rem;

      background: ${(props) => props.theme.base400};
      color: ${(props) => props.theme.base700};
      border-radius: 6px;

      font-size: 0.75rem;
      line-height: 1;
      text-transform: uppercase;

      transition: 0.3s;

      svg {
        color: ${(props) => props.theme.primary};
      }

      input {
        display: none;
      }

      &:hover {
        background: ${(props) => props.theme.base500};
      }

      &:has(input:checked) {
        background: ${(props) => props.theme.primary_light};
        border: 1px solid ${(props) => props.theme.primary};
      }
    }
  }
`;
