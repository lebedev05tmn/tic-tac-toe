import styled from "styled-components";
export const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.fontColorBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 60px;
  &:hover {
    background: #f0f0f0;
  }
  &:disabled {
    color: ${props => props.theme.fontColorBlack};
  }
`;
