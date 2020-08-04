import React from "react";
import { LeftNav } from "./LeftNav";
import { LogInBox } from "../login/Login";
import { StyledNav } from "../styled/lib";

export const Nav = () => {
  return (
    <StyledNav>
      <LeftNav />
      <LogInBox />
    </StyledNav>
  );
};
