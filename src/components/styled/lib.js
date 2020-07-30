import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: black;
  color: white;
  font-size: 20px;
  @media all and (max-width: 500px) {
  }
  @media (orientation: landscape) {
  }
`;

export const ArticleWrapper = styled.section`
  margin-top: 5%;
  padding: 5%;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding: 3%;
`;

export const HeaderWrapper = styled.header`
  padding: 10%;
  text-align: left;
`;

export const HeaderDiv = styled.div`
  display: inline-block;
  width: 350px;
  position: sticky;
  left: 0;
`;

export const StyledNav = styled.nav`
  width: 100vw;
  height: 8vh;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  text-decoration: none;
  flex-flow: flow nowrap;

  li {
    padding: 18px 10px;
  }

  @media screen (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
  }
`;
