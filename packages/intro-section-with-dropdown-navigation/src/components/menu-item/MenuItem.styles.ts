import styled from "styled-components";
import { ReactComponent as ArrowDownIcon } from "components/icons/icon-arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "components/icons/icon-arrow-up.svg";
import { BREAKPOINTS } from "components/styles.config";
import { Button } from "components/button";

export const WrapperDiv = styled.div`
  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    position: relative;
  }
`;

export const StyledArrowDownIcon = styled(ArrowDownIcon)`
  margin-left: 10px;
`;

export const StyledArrowUpIcon = styled(ArrowUpIcon)`
  margin-left: 10px;
`;

export const StyledIcon = styled.svg`
  margin-right: 10px;
`;

export const StyledButton = styled(Button)`
  @media (max-width: calc(${BREAKPOINTS.MD} - 1px)) {
    padding-left: 0;
  }

  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    white-space: nowrap;
  }
`;
