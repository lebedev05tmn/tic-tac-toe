import React from "react";
import { StyledHeader, StyledList, StyledLink, StyledLi } from "./style";
import { AppRoute } from "../../../const";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledList>
        {Object.entries(AppRoute).map((path: string[]) => (
          <StyledLi>
            <StyledLink to={path[1]}>{path[0]}</StyledLink>
          </StyledLi>
        ))}
      </StyledList>
    </StyledHeader>
  );
};

export default Header;
