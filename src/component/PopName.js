import React , {useEffect , useRef} from "react";
import { Link } from "react-router-dom";

export default function PopName() {
  
   const okBoutonRef = useRef(null)
 const handlePressOk = (e) => {
if (e.key === "Enter" && okBoutonRef.current){
  okBoutonRef.current.click()
}
 }


useEffect(() => {
window.addEventListener("keyup", handlePressOk)
return () => {
  window.removeEventListener("keyup" , handlePressOk )
}
},[])

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Username déjà utilisé :/ Essayez un autre</h2>
       <Link  to={'/sign'} ><button ref={okBoutonRef}  >Ok</button></Link> 
      </div>
    </div>
  );
}
