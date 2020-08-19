import React from "react";
import { PaginationButton, PaginationUL} from './styled/lib'

export const Pagination = ({ totalArticles, paginate }) => {
  const articlesPerPage = 10;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
         return  <li key={number}>
           <PaginationUL>
             <PaginationButton onClick={() => paginate(number)}>{number}</PaginationButton>
           </PaginationUL>
          </li>;
        })}
      </ul>
    </nav>
  );
};
