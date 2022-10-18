import { BREAKPOINTS } from "components/styles.config";
import styled from "styled-components";

export const StyledHeading = styled.h1<{ align: string }>`
  font-size: 36px;
  text-align: ${({ align }) => align};

  @media (min-width: ${BREAKPOINTS.MD}) {
    font-size: 56px;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    font-size: 76px;
  }
`;
