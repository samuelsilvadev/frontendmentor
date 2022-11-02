import { BREAKPOINTS, GLOBAL_VARIABLES } from "components/styles.config";
import styled from "styled-components";

export const Nav = styled.nav`
  overflow: auto;
  height: calc(100% - ${GLOBAL_VARIABLES.HEADER_HEIGHT.SM});
`;

export const MenuUlList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: ${BREAKPOINTS.SM}) {
    &:last-of-type {
      padding: 0 42px;
    }
  }
`;
