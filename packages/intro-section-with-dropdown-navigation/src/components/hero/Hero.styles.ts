import { BREAKPOINTS } from "components/styles.config";
import styled from "styled-components";

export const Img = styled.img`
  object-fit: cover;
  height: 282px;
  width: 100%;
  max-width: 100%;

  @media (min-width: ${BREAKPOINTS.MD}) {
    object-fit: contain;
    height: auto;
  }
`;
