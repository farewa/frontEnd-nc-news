import React from "react";
import { HeaderWrapper, HeaderDiv } from "../styled/lib";

export const Home = () => {
  return (
    <HeaderWrapper>
      <HeaderDiv>
        <h1>Welcome to NC News</h1>
        <p>
          A social news aggregation, web content rating and discussion website
        </p>
      </HeaderDiv>
    </HeaderWrapper>
  );
};
