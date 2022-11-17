import { Menu } from "components/menu";
import { BREAKPOINTS, GLOBAL_VARIABLES } from "components/styles.config";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "components/icons/logo.svg";

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

export const StyledLogoIcon = styled(LogoIcon)`
  flex-shrink: 0;
`;

export const OpenMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledMenu = styled(Menu)`
  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    margin-left: 10px;
  }
`;
