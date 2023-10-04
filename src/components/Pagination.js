import React from "react";
import "../App.css";
const Pagination = ({ totalPosts, postPerPage, setcurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => {
              setcurrentPage(page);
            }}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
