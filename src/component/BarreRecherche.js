import React from "react";
import { Link } from "react-router-dom";

export default function BarreRecherche(){
return(
    <div>

<form className="search-form">
<input
  type="text"
  placeholder="Rechercher..."
  className="search-input"
/>
<Link to='/sort' >
<button type="submit" className="search-button">
    Rechercher
</button>
</Link>

</form>
</div>

)
}