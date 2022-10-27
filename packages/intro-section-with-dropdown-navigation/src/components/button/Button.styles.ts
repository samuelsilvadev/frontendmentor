import { COLORS } from "components/styles.config";
import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  variation: string;
  full?: boolean;
  align: string;
}>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 14px 24px;
  width: ${({ full }) => (full ? "100%" : "auto")};
  text-align: ${({ align }) => align};

  ${({ variation }) => {
    if (variation === "primary") {
      return css`
        font-size: 16px;
        background-color: ${COLORS.ALMOST_BLACK};
        color: ${COLORS.ALMOST_WHITE};
        border-radius: 13px;
      `;
    }

    if (variation === "secondary") {
      return css`
        font-size: 16px;
        background-color: ${COLORS.ALMOST_WHITE};
        border: 2px solid ${COLORS.MEDIUM_GRAY};
        color: ${COLORS.MEDIUM_GRAY};
        border-radius: 13px;
      `;
    }

    if (variation === "link") {
      return css`
        font-size: 16px;
        color: ${COLORS.MEDIUM_GRAY};
      `;
    }
  }};
`;
