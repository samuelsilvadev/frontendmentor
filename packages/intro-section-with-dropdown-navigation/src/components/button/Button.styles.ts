import { COLORS } from "components/styles.config";
import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ variation: string }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;

  ${({ variation }) => {
    if (variation === "primary") {
      return css`
        font-size: 16px;
        background-color: ${COLORS.ALMOST_BLACK};
        color: ${COLORS.ALMOST_WHITE};
        padding: 14px 24px;
        border-radius: 13px;
      `;
    }
  }};
`;
