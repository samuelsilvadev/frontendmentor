import styled from "styled-components";

export const MenuUlList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;

  &:first-of-type {
    margin-bottom: 10px;
  }

  &:last-of-type {
    padding: 0 42px;
  }
`;
