import React from "react";
import { StyledButton } from "./style";

type Props = {
  onClick: () => void;
  value: string;
  isDisabled: boolean;
};

const Cell: React.FC<Props> = ({ onClick, value, isDisabled }) => (
  <StyledButton disabled={isDisabled} onClick={onClick}>
    {value}
  </StyledButton>
);

export default Cell;
