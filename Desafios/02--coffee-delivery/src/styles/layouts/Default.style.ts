import { styled } from "styled-components";

export const DefaultLayoutContainer = styled.div`
  max-width: 90rem;
  min-height: 100vh;
  padding: 0 0.5rem;
  margin: 0 auto;

  background: ${(props) => props.theme.base100};
`;
