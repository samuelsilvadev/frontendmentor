import {
  BREAKPOINTS,
  COLORS,
  GLOBAL_VARIABLES,
} from "components/styles.config";
import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${COLORS.ALMOST_WHITE};
  width: 64vw;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    background-color: ${COLORS.ALMOST_BLACK_ALPHA};
    width: 36vw;
    height: 100%;
    left: 0;
    transform: translateX(-100%);
  }
`;

export const CloseButtonWrapperDiv = styled.div`
  padding: 7px 18px;
  display: flex;
  justify-content: flex-end;
  height: ${GLOBAL_VARIABLES.HEADER_HEIGHT.SM};

  @media (min-width: ${BREAKPOINTS.MD}) {
    height: ${GLOBAL_VARIABLES.HEADER_HEIGHT.MD};
  }
`;
