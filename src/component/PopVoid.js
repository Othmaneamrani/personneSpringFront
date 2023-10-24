import React , {useEffect , useRef} from "react";
import { Link } from "react-router-dom";

export default function PopVoid({p , versSort}) {
  const okBoutonRef = useRef(null)
  const handlePressOk = (e) => {
 if (e.key === 'Enter' && okBoutonRef.current){
   okBoutonRef.current.click()
 }
  }
 
 
 useEffect(() => {
 window.addEventListener('keyup', handlePressOk)
 return () => {
   window.removeEventListener('keyup' , handlePressOk )
 }
 },[])
  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2> {p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()} a été modifié !</h2>
        {versSort ?(
          <Link  to={'/sort'} ><button  ref={okBoutonRef} >Ok</button></Link> 
        ):( <Link  to={'/home'} ><button  ref={okBoutonRef} >Ok</button></Link> )
        } 
      </div>
    </div>
  );
}