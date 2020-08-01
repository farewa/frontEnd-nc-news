import React from "react";
import moment from "moment";
import { useSingleArticle } from "../../hooks/useSingleArticle";
import { ArticleWrapper } from "../styled/lib";

export const SingleArticle = ({ article_id }) => {
  const { loading, data, error } = useSingleArticle(article_id);

  console.log("in single article");

  return (
    <>
      {error && <p>error</p>}
      {loading ? (
        <p>loading...</p>
      ) : (
        data.article && (
          <ArticleWrapper>
            <h1>{data.article.title}</h1>
            <h3>author: {data.article.author}</h3>
            <h3>created {moment(data.article.created_at).fromNow()}</h3>
            <p>{data.article.body}</p>
            <p>Comment Count: {data.article.comment_count}</p>
          </ArticleWrapper>
        )
      )}
    </>
  );
};
