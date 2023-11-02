import React, { useEffect } from "react";

export default function Pagination({ togllePageDelete2,pageDelete,length,currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  if (currentPage > 1 && length % 5 === 0 && pageDelete===true ) {
    onPageChange(currentPage - 1);
    togllePageDelete2(false);
  }


  return (
    <ul className="pagination">
      <li
        className={currentPage === 1 ? "disabled" : ""}
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        Précédent
      </li>
      {pageNumbers.map((page) => 
        <li
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      )}
      <li
        className={currentPage === totalPages  || currentPage > totalPages ? "disabled" : ""}
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        Suivant
      </li>
    </ul>
  );
}
