import React, { useState} from "react";
import moment from "moment";
import { useSingleArticle } from "../../hooks/useSingleArticle";
import { ArticleWrapper, StyledButton } from "../styled/lib";
import { SingleArticleComments } from "../comments/SingleArticleComments";

export const SingleArticle = ({ article_id }) => {
  const type = "singleArticle";
  const { loading, data, error } = useSingleArticle(article_id, type);

  const [showComment, setComment] = useState(false);

  return (
    <main>
      {error && <p>error</p>}
      {loading ? (
        <p>loading...</p>
      ) : (
        data.article && (
          <ArticleWrapper>
            <h2>{data.article.title}</h2>
            <h3>author: {data.article.author}</h3>
            <h3>created {moment(data.article.created_at).fromNow()}</h3>
            <h3>votes: {data.article.votes}</h3>
            <p>{data.article.body}</p>
            <p>Comment Count: {data.article.comment_count}</p>
            <StyledButton
              onClick={() => {
                setComment(!showComment);
              }}
            >
              Comments
            </StyledButton>
            {showComment && <SingleArticleComments article_id={article_id} />}
          </ArticleWrapper>
        )
      )}
    </main>
  );
};
