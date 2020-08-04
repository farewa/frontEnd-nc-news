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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const UL = styled.ul`
  list-style: none;
  display: flex;
  text-decoration: none;
  flex-flow: row nowrap;
  padding: 0;
  margin: 0;

  li {
    padding-left: 5%;
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

export const CommentDiv = styled.div`
  border-bottom: 1px solid white;
`;

export const CommentButton = styled.button`
  background-color: black;
  border: 1px solid white;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 90%;
`;

export const LogInDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
`;
