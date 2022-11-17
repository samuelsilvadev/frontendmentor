import { BREAKPOINTS, GLOBAL_VARIABLES } from "components/styles.config";
import styled from "styled-components";

export const Nav = styled.nav`
  overflow: auto;
  height: calc(100% - ${GLOBAL_VARIABLES.HEADER_HEIGHT.SM});

  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    overflow: visible;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const MenuUlList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
  margin: 10px 0;

  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    flex-direction: row;
    padding: 0;
  }
`;
