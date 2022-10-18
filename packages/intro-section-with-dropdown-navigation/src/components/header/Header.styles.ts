import { BREAKPOINTS, GLOBAL_VARIABLES } from "components/styles.config";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: ${GLOBAL_VARIABLES.HEADER_HEIGHT.SM};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;

  @media (min-width: ${BREAKPOINTS.MD}) {
    height: ${GLOBAL_VARIABLES.HEADER_HEIGHT.MD};
  }
`;

export const OpenMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
