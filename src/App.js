import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Home } from "./components/home/Home";
import { AllArticles } from "./components/articles/AllArticles";
import {SingleArticle} from "./components/articles/SingleArticle"
import { AppWrapper } from "./components/styled/lib";
import { Nav } from "./components/nav/Nav";
import { ArticleByTopic } from "./components/topics/ArticleByTopic";

const App = () => {
  return (
    <AppWrapper>
      <Nav/>
      <Router>
        <Home path="/" />
        <AllArticles path="/articles" />
        <ArticleByTopic path = "/:topic"/>
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </AppWrapper>
  );
};

export default App;
