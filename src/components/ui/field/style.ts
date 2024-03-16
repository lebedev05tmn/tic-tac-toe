import { styled } from "styled-components";
export const StyledField = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid ${props => props.theme.fontColorBlack};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: white;
`;

export const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #222222;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: #333333;
  }
`;
