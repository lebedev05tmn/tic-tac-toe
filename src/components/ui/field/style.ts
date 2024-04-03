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
  background-color: ${props => props.theme.buttonColor};
  color: white;
  border: 1px solid ${props => props.theme.fontColorBlack};
  &:hover {
    background-color: ${props => props.theme.buttonColorHoverActive};
  }
`;

export const StyledSteps = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 70vw;
  top: 140px;
  gap: 20px;
`;
