import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: inherit;
  border-bottom: 1px solid white;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 100px;
  background-color: #18745d;
`;

export const StyledLi = styled.li`
  width: min-content;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 700;
  font-size 24px;
  text-decoration: none;
  &:focus, &:hover {
    color: aqua;
  }
  &:active {
    color: violet;
  }
`;
