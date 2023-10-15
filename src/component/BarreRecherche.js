import React from "react";
import { Link } from "react-router-dom";

export default function BarreRecherche({ onSort, sort }) {
  const isSortEmpty = sort.trim() === "";

  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Rechercher..."
          className="search-input"
          value={sort}
          onChange={(e) => onSort(e.target.value)}
        />
        <Link to={isSortEmpty ? '#' : '/sort'}>
          <button type="submit" className="search-button">
            Rechercher
          </button>
        </Link>
        {isSortEmpty && <p>Veuillez entrer quelque chose.</p>}
      </form>
    </div>
  );
}
