import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
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
        className={currentPage === totalPages ? "disabled" : ""}
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
