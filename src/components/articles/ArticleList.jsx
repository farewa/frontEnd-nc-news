import React from "react";
import { Link } from "@reach/router";
import { ListItem} from '../styled/lib'

export const ArticleList = ({articles}) => {
  return articles.map((article) => {
    return (
      <article key={article.article_id}>
        <Link to={`/articles/${article.article_id}`}>
          <ListItem>{article.title}</ListItem>
        </Link>
      </article>
    );
  });
};
