import React from "react";
import { ArticleList } from "./ArticleList";
import { ArticleWrapper } from "../styled/lib";
import { useArticles } from "../../hooks/useArticles";

export const AllArticles = () => {
  const { loading, data, error } = useArticles();

  return (
    <main>
      <ArticleWrapper>
        <h1>Articles</h1>
        {error && <p>error</p>}
        {loading ? (
          <p>loading...</p>
        ) : (
          <ul>{data.articles && <ArticleList articles={data.articles} />}</ul>
        )}
      </ArticleWrapper>
    </main>
  );
};
