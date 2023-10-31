import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BarreRecherche({ onSort, sort }) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const isSortEmpty = sort.trim() === "";
useEffect(()=>{
  onSort('')
},[])
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
          <button
            type="submit"
            className="search-button"
            onClick={() => setButtonClicked(true)}
          >
            Rechercher
          </button>
        </Link>
        {buttonClicked && isSortEmpty && <p>Veuillez entrer quelque chose.</p>}
      </form>
    </div>
  );
}
