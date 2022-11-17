import { BREAKPOINTS, COLORS } from "components/styles.config";
import styled, { css } from "styled-components";

export const MenuUlList = styled.ul<{ popup?: boolean }>`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;

  @media (min-width: calc(${BREAKPOINTS.MD} + 1px)) {
    ${({ popup }) => {
      if (popup) {
        return css`
          border-radius: 10px;
          background: ${COLORS.ALMOST_WHITE};
          flex-direction: column;
          gap: 0;
          position: absolute;
          left: 24px;
          padding: 10px;
          align-items: flex-start;
          box-shadow: 6px 4px 40px ${COLORS.DARKER_GRAY};
        `;
      }

      return css`
        flex-direction: row;
        align-items: center;
        gap: 0;
      `;
    }}
  }
`;
