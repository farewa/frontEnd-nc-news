import React, { useState, createContext, useCallback, useMemo } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Home } from "./components/home/Home";
import { AllArticles } from "./components/articles/AllArticles";
import { SingleArticle } from "./components/articles/SingleArticle";
import { AppWrapper } from "./components/styled/lib";
import { Nav } from "./components/nav/Nav";
import { ArticleByTopic } from "./components/topics/ArticleByTopic";

export const UserContext = createContext();
export const SetUserContext = createContext();

const App = () => {
  const [userName, setUsername] = useState("");

  const settingUsername = useCallback(() => setUsername(userName), [userName]);

  const getUsername = useMemo(() => ({settingUsername}), [settingUsername])

  return (
    <AppWrapper>
      <UserContext.Provider value={userName}>
        <SetUserContext.Provider value={getUsername()}>
          <Nav />
          <Router>
            <Home path="/" />
            <AllArticles path="/articles" />
            <ArticleByTopic path="/:topic" />
            <SingleArticle path="/articles/:article_id" />
          </Router>
        </SetUserContext.Provider>
      </UserContext.Provider>
    </AppWrapper>
  );
};

export default App;
