import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;

  & svg {
    width: 70%;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
