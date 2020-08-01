import React from "react";
import { useSingleArticle } from "../../hooks/useSingleArticle";

export const SingleArticleComments = ({ article_id }) => {
  const type = "comments";

  const { loading, data, error } = useSingleArticle(article_id, type);

  console.log(data);

  return <p> comments</p>;
};
