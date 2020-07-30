import React from "react";
import { useArticles } from "../../hooks/useArticles";
import { ArticleWrapper } from "../styled/lib";
import { ArticleList } from "../articles/ArticleList";

export const ArticleByTopic = ({ topic }) => {
  const { loading, data, error } = useArticles(topic);
  return (
    <ArticleWrapper>
      <h1>{`${topic} articles`}</h1>
      {error && <p>error</p>}
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>{data.articles && <ArticleList articles={data.articles} />}</ul>
      )}
    </ArticleWrapper>
  );
};
