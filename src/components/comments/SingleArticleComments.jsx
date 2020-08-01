import React from "react";
import { useSingleArticle } from "../../hooks/useSingleArticle";
import { CommentDiv } from "../styled/lib";
import moment from "moment";

export const SingleArticleComments = ({ article_id }) => {
  const type = "comments";

  const { loading, data, error } = useSingleArticle(article_id, type);

  console.log("in comments");

  return (
    <section>
      <article>
        {error && <p>error</p>}
        {loading ? (
          <p>loading...</p>
        ) : data.comments ? (
          data.comments.map((comment) => {
            return (
              <CommentDiv key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>created {moment(comment.created_at).fromNow()}</p>
              </CommentDiv>
            );
          })
        ) : (
          <p>no comments yet</p>
        )}
      </article>
    </section>
  );
};
