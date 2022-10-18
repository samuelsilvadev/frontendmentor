import { COLORS } from "components/styles.config";
import styled from "styled-components";

export const Paragraph = styled.p<{ align: string }>`
  font-size: 16px;
  text-align: ${({ align }) => align};
  color: ${COLORS.MEDIUM_GRAY};
  line-height: 1.5;
`;
