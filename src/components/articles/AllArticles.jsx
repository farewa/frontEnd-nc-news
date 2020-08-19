import React, { useState } from "react";
import { ArticleList } from "./ArticleList";
import { ArticleWrapper } from "../styled/lib";
import { useArticles } from "../../hooks/useArticles";
import { Pagination } from "../Pagination";

export const AllArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data, error } = useArticles("", currentPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <ArticleWrapper>
        <h1>Articles</h1>
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
    </main>
  );
};
