import React, { useState } from "react";
import { useArticles } from "../../hooks/useArticles";
import { ArticleWrapper } from "../styled/lib";
import { ArticleList } from "../articles/ArticleList";
import {Pagination} from '../Pagination'

export const ArticleByTopic = ({ topic }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data, error } = useArticles(topic, currentPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ArticleWrapper>
      <h1>{`${topic} articles`}</h1>
      {error && <p>error</p>}
      {loading ? (
        <p>loading...</p>
      ) : (
        <div>
          <ul>{data.articles && <ArticleList articles={data.articles} />}</ul>
          <Pagination totalArticles={data.total_count} paginate={paginate} />
        </div>
      )}
    </ArticleWrapper>
  );
};
