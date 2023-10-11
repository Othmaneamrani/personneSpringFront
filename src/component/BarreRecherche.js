import React  from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BarreRecherche({onSort , sort}){
  

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/sort');
  };

return(
    <div>

<form className="search-form" >
<input
  type="text"
  placeholder="Rechercher..."
  className="search-input"
  value={sort}
  onChange={(e)=>onSort(e.target.value)}
/>
<Link to='/sort' >
<button type="submit" className="search-button"   onClick={handleSearch} >
    Rechercher
</button>
</Link>

</form>
</div>

)
}