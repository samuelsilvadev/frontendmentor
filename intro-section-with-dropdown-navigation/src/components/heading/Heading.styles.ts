import styled from "styled-components";

export const StyledHeading = styled.h1<{ align: string }>`
  font-size: 36px;
  text-align: ${({ align }) => align};
`;
