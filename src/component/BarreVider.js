import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { vider } from "./service";

export default function BarreVider({toggleViderState, activeSearchVider,onSort, sort }) {


const handleViderClick = (sort) => {
    if(sort === "oui"){

            vider(localStorage.getItem('idConnexion'))
                .then(() => {
                    toggleViderState();
                    activeSearchVider();
              })
              .catch((err) => {
                console.log(err);
              });
    }   else{
            return;
        }
}

  const isSortEmpty = sort.trim() !== "oui";
useEffect(()=>{
  onSort('')
},[])
  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Êtes-vous sûr ?"
          className="search-input"
          value={sort}
          onChange={(e) => onSort(e.target.value)}
        />
        <Link>
          <button
            type="submit"
            className="vider-button"
            onClick={()=>handleViderClick(sort)}
          >
            Vider
          </button>
        </Link>
        {isSortEmpty && <p className="alerte"> Saisir 'oui' pour vider la liste</p>}
      </form>
    </div>
  );
}
