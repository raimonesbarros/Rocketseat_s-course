import { styled } from "styled-components";

export const FormOfPaymentStyles = styled.div`
  width: 100%;

  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme.base200};
  border-radius: 6px;

  .header {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    .currencyDollar {
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

  form > label {
    display: flex;
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

      .icon {
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
