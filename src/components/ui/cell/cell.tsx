import React from "react";
import { StyledButton } from "./style";

type Props = {
  onClick?: () => void;
  value: string;
  isDisabled: boolean;
  start: boolean;
};

const Cell: React.FC<Props> = ({ onClick, value, isDisabled, start }) => {
  return start ? (
    <div style={{ backgroundColor: "black" }}></div>
  ) : (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default Cell;
